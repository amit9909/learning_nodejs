// const fs =require('fs');
// console.log("Code Step by Step");
// fs.writeFileSync("hello.txt","Code Step by Step");
// // console.log("-->>,__dirname");
// console.log("-->>",__filename);


// We can also create the file by calling the writeFileSync function

const fs =require('fs').writeFileSync;
fs("abc.txt","abc")