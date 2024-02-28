const { createServer } = require("net");

const server = createServer((socket) => {
  socket.on("data", (cleintData) => {
    console.log("Data recieved from client", cleintData.toString());
    socket.write("Recieved on server, Thankyou!");
  });
});

server.listen(8080, () => {
  console.log("New server up on port 8080");
});
