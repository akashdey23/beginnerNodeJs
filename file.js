import fs from 'fs';

// Synchronous write (blocks until done)
// fs.writeFileSync("./test.txt", "Hello this is a file created during backend running");

// Asynchronous write (non-blocking)
// fs.writeFile("./test.txt", "Hello this is updated code", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File successfully updated!");
//   }
// });

// const result = fs.readFile('./contacts.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log("Error", err);
//     }

//     else{
//         console.log(result);
//     }
// })
// console.log(result);


const appendF = fs.appendFileSync("./test.txt" , `\n Hey There I m using nodeJS ${Date.now()}\n`);

console.log(appendF);
