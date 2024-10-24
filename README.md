

# Realtime Device Tracker Backend

This is the backend server for the **Realtime Device Tracker** application. It provides real-time tracking of devices using a Node.js server with WebSockets (`socket.io`) for real-time communication and Express for handling HTTP requests. The server integrates with a Leaflet-based frontend for rendering maps and displaying tracked devices.

## Table of Contents

- [Realtime Device Tracker Backend](#realtime-device-tracker-backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [WebSocket Events](#websocket-events)
  - [Contributing](#contributing)

## Features

- Real-time device tracking using WebSockets (`socket.io`).
- Backend server with RESTful API endpoints for device data.
- Integration with Leaflet.js for map rendering and tracking devices on the frontend.
- Scalable backend architecture using Express.js and Node.js.

## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building the backend.
- **Socket.io**: For real-time, bidirectional communication between the client and server.
- **Leaflet.js**: JavaScript library for interactive maps (used in frontend).
- **EJS**: Embedded JavaScript templating engine (for serving views).

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Explore13/Realtime-Device-Tracker-Backend.git
   cd Realtime-Device-Tracker-Backend
   ```

2. **Install dependencies**:
   Make sure you are in the project root directory and install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional):
   Create a `.env` file in the project root to configure environment variables, such as port or database credentials (if applicable).

## Running the Application

1. **Start the server**:
   To run the server on `localhost`, use the following command:
   ```bash
   npm start
   ```

2. **Access the app**:
   Open your browser and navigate to `http://localhost:3000`. The backend will start on port 3000 (or whichever port you set in the environment).

3. **Real-time tracking**:
   Open multiple browser windows to test real-time tracking of devices on the map.

## WebSocket Events

The server communicates with clients via WebSocket (Socket.io) events.

- **`connection`**: When a new user connects to the server.
- **`send-location`**: Clients emit this event when they send their latitude and longitude data.
- **`receive-location`**: The server emits this event with the user’s ID and location details to all connected clients.
- **`disconnect`**: When a user disconnects from the server.


## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

```
Thank You Everyone :)
```