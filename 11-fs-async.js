//asyncronous approach or blocking approach

const { readFile, writeFile } = require('fs');

console.log('start')
//the asyncroous read file takes two argument since its a call back function
//the callback function takes 2 args as well
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return //here we are saying if error just return null
  }
  // console.log(result)//if we dont provid the utf8 we will get the buffer
  const first = result;
  readFile('./content/second.txt','utf-8',(err,result)=>{
    if (err) {
      console.log(err);
      return; 
    }
    const second = result;
    writeFile('./content/result-async.txt',` ${first}, ${second}`,(err,result)=>{
      if (err) {
        console.log(err);
        return;
      }
      console.log("done with this task");
    }
    );//offcorse since there is no file called result.txt node will create for us
  });

});
console.log("starting next task");








// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')





