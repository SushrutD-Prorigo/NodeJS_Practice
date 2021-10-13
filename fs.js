const fs=require('fs');

fs.readFile('demo.txt','utf8',(err,data)=>{
    console.log(err,data);
})

fs.writeFile('demo2.txt',"Hello Sushrut",()=>{
    console.log("Written ");
})