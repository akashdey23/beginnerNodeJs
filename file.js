import fs from 'fs'


console.log(fs);
fs.writeFileSync("./test.txt", "Hello this is a file created during backend running")