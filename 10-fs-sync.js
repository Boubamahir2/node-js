//syncronous approach or non blocking approach

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//this mehode create file from scratch
writeFileSync(
  "./content/result-sync.txt",
  `here is the result${first}, ${second}`,
  { flag: "a" } // this will create the same result value again and append it to the result
  //which mean the same result  text will appear twice
); //so if the file is not there node will create one and if its already there, node by default will overwrite it
//now if we check our content folder we can see that a file by the name result.txt was created

console.log('done with this task');
console.log('starting the next one');
