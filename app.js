import express from "express";
const app = express();
import http from "http";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";
dotenv.config();

import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("send-location", (position) => {
    console.log(position.latitude, position.longitude);
    io.emit("receive-location", { id: socket.id, ...position });
  });
  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
    console.log(socket.id +" Disconnected");
    
  });

  console.log(socket.id + " Connected");
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT || 3000);
