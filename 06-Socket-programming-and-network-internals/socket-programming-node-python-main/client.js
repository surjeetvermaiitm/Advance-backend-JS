const { createConnection } = require("net");

const client = createConnection({ port: 8080 }, () => {
  console.log("Client connected");
  client.write("Hello from node client.");
});

client.on("data", (serverData) => {
  console.log("Data recieved from server is", serverData.toString());
});
