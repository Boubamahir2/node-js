const http = require('http')

const server = http.createServer((req,res)=>{
  if (req.url === "/") {
    //this means; if request url = to the homepage
    res.end("welcome to our home page"); //here we are returning the homepage to the user request
  } else if (req.url === "/about") {
    res.end("here is a short story about us");
  } else {
    res.end(`<h1>OoPs!</h1>
  <p>We cant seem to find what you are looking for</p>
  <a href="/">back Home</a>`); //the forward slash means homepage
});

server.listen(5000);


