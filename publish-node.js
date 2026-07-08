import { readFileSync, existsSync, writeFileSync } from "fs";
import { execSync } from "child_process";

// Kill old server
try { execSync("sudo sh -c 'pkill -f serve.ts || true'", { stdio: "pipe" }); } catch {}
try { execSync("sudo sh -c 'kill $(lsof -t -iTCP:3000 -sTCP:LISTEN 2>/dev/null) 2>/dev/null || true'", { stdio: "pipe" }); } catch {}

// Run the build
console.log("Building...");
execSync("cd /home/team/shared/site && bun run build", { stdio: "inherit", cwd: "/home/team/shared/site", env: { ...process.env, HOME: "/home/engine" }});
console.log("Build complete");