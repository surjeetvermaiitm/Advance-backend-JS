from socket import socket
print("Starting a new client: Client 1")

HOST: str = "localhost"

PORT: int = 3000 # This is the port for the server to connect

client_socket: socket = socket()

client_socket.connect((HOST, PORT)) # client needs to connect to the server

client_socket.sendall(b"Hello from the client 1")

response_from_server: str = client_socket.recv(2048)
print(response_from_server)