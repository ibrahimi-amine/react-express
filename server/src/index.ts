import { Socket } from "socket.io";

const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "../../client/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

server.listen(port, () => {
  process.stdout.write(`Listening on ${port}`);
});

app.get("/*", (req: any, res:any) => {
  res.sendFile(HTML_FILE);
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected to the server");
  socket.on("disconnect from server", () => {
    console.log("user disconnected");
  });
  socket.on("liveSlide", (msg: string) => {
    socket.broadcast.emit("tasks", msg);
  });
});
