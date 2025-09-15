import { createServer } from "http";
import fs from "fs";

const myServer = createServer((req, res) => {
    // Create a log string with timestamp and request info
    const log = `${new Date().toISOString()} - ${req.url} - ${req.method}\n`;

    // Append log to file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
            res.end("Internal Server Error");
            return;
        }

        // Handle routes after logging
        switch (req.url) {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("This is about page");
                break;
            default:
                res.end("404 NOT found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started on http://localhost:8000"));
