from socket import socket
from threading import Thread

HOST: str = "localhost"

PORT: int = 3000

def connect_a_client(conn, add):
    print("New client has been connected")
    data = conn.recv(2048)
    print(f"Data recieved from client is {data}")
    conn.sendall(b"Server has recieved your data, thanks")

# Created a new socket object
server_socket: socket = socket()

# bind the sokcet object to the host and port
server_socket.bind((HOST, PORT))

# start listening for new connection
server_socket.listen()

print("Server is listening on", HOST, PORT)


while True:
    # Wait for new connection acceptance
    connection, address = server_socket.accept() # It is accepting a new connection
    thread: Thread = Thread(target=connect_a_client, args=(connection, address)) # it is preparing a thread
    thread.start() # Starts running the thread