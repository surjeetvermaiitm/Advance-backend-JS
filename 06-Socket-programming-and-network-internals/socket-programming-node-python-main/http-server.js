const { createServer } = require("http");

const server = createServer((req, res) => {
  console.log("New conncection was created.");
  if (req.url === "/home") {
    return Response.end("welcome home");
  } else {
    return res.end("Something Something !");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sever started at port: ${PORT}`);
});
