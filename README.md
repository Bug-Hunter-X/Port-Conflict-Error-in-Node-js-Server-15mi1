# Node.js Port Conflict Bug

This repository demonstrates a common error in Node.js server development: the failure to handle port conflicts.  The provided code creates a simple HTTP server that listens on port 3000. If this port is already in use by another application, the server will fail to start without providing clear feedback to the user.

The `bug.js` file contains the flawed code, while `bugSolution.js` provides an improved version with error handling to gracefully manage port conflicts.  The solution utilizes the `process.exit()` method to signal the termination of the server process when a port conflict occurs and logs an informative message to the console.