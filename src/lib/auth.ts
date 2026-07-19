import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getUserByEmail, getUserById, createUser } from "~/db";
import type { UserRow } from "~/db";

const JWT_SECRET = process.env.JWT_SECRET || "aniflow-dev-secret-key-change-in-production";
const JWT_EXPIRES_IN = "7d";

// --- Password Hashing ---

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  // Support both bcrypt hashes and the legacy mvp_v1 format
  if (hash.startsWith("mvp_v1:")) {
    return hash === `mvp_v1:${password}`;
  }
  return bcrypt.compare(password, hash);
}

// --- JWT Tokens ---

export interface JwtPayload {
  userId: string;
  email: string;
  isPremium: boolean;
}

export function signToken(user: UserRow): string {
  const payload: JwtPayload = {
    userId: user.id,
    email: user.email,
    isPremium: user.is_premium,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

// --- Auth Functions ---

export async function signUp(name: string, email: string, password: string) {
  // Check if user exists
  const existing = await getUserByEmail(email);
  if (existing) {
    return { success: false as const, error: "An account with this email already exists" };
  }

  const hashedPassword = await hashPassword(password);
  const user = await createUser(name, email, hashedPassword);
  const token = signToken(user);

  return {
    success: true as const,
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isPremium: user.is_premium,
    },
  };
}

export async function logIn(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    return { success: false as const, error: "Invalid email or password" };
  }

  const match = await verifyPassword(password, user.password);
  if (!match) {
    return { success: false as const, error: "Invalid email or password" };
  }

  const token = signToken(user);

  return {
    success: true as const,
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isPremium: user.is_premium,
    },
  };
}

export async function getMe(token: string) {
  const payload = verifyToken(token);
  if (!payload) {
    return { success: false as const, error: "Invalid or expired token" };
  }

  const user = await getUserById(payload.userId);
  if (!user) {
    return { success: false as const, error: "User not found" };
  }

  return {
    success: true as const,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isPremium: user.is_premium,
    },
  };
}