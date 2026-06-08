const fs = require("fs")

const readFileWithErrorHandling = function(fileName,callback){
    fs.readFile(fileName,"utf-8",function(error,data){
        if(error){
            if (error.code === "ENOENT"){
                callback(`\nFile not found: ${fileName}
oficial error msg : ${error.message}\n`)
                return
            }
            if (error.code === "EISDIR"){
                callback(`\nuser gave directory instead of file ${fileName}
oficial error msg : ${error.message}\n`)
                return
            }
        }
        
        callback(`\nFile was Read successfully Size: ${data.length} `)         
        
    })

}


readFileWithErrorHandling('existing.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

readFileWithErrorHandling('NOTexisting.txt', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
readFileWithErrorHandling('testDir', (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});


// [Error: EISDIR: illegal operation on a directory, read] {
//   errno: -4068,
//   code: 'EISDIR',
//   syscall: 'read'
// }
// EISDIR  - dot first or /
// ENOENT - file not exists


