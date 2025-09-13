import { createServer } from "http";
import fs from "fs";

const myServer = createServer((req, res) => {
    // Create a log string with timestamp and request info
    const log = `${new Date().toISOString()} - ${req.url} - ${req.method}\n`;

    // Append log to file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
        }
    });

    // Send response
    res.end("Hello from the server again");
});

myServer.listen(8000, () => console.log("Server Started on http://localhost:8000"));
