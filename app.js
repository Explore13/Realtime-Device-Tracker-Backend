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
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("send-location", (position) => {
    const { latitude, longitude, userName } = position;
    console.log(
      `User: ${userName}, Latitude: ${latitude}, Longitude: ${longitude}`
    );
    io.emit("receive-location", {
      id: socket.id,
      latitude,
      longitude,
      userName,
    });
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
    console.log(socket.id + " disconnected");
  });

  console.log(socket.id + " Connected");
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
