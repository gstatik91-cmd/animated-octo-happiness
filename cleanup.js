const fs = require('fs');
const path = '/home/team/shared/site/src/routes';
const toRemove = ['anime..tsx', 'watch...tsx', 'anime..tsx.old', 'watch...tsx.old'];
for (const f of toRemove) {
  try {
    fs.unlinkSync(path + '/' + f);
    console.log('removed:', f);
  } catch(e) {
    console.log('error removing', f, e.message);
  }
}
console.log('done');