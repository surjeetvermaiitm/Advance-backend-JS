const net = require("net");
const dns = require("dns");

dns.lookup("example.com", (err, address) => {
  if (err) throw err;
  const socket = net.createConnection({
    host: address, // IP Address
    port: 80,
  });

  // request = "GET / HTTP/1.1\nHost: example.com\n\n"
  const request = `
GET / HTTP/1.1
Host: example.com

`.slice(1);

  socket.write(request);

  socket.pipe(process.stdout);
});
