const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log("Data received from client", clientData.toString());
  });
  socket.write("Received from server");
});

//binding and listening both together
server.listen(8080, () => {
  console.log("New server up on port 8080");
});
