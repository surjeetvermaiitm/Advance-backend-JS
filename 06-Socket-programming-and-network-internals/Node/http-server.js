const http = require("http");

const server = http.createServer((req, res) => {
  console.log("New connection was created");
  if (req.url === "home") {
    return res.end("Welcome home");
  } else {
    return res.end("Something Someting !!!");
  }
});

server.listen(3001, () => {
  console.log("Sever started at port 3001");
});
