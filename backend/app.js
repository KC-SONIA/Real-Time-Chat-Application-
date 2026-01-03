const express = require("express");
const authRouter = require("./routes/authRoute");
const app = express();
app.use(express.json());
module.exports = app;

/**We import the Express library, then call the express() function to create an Express application instance. 
This app instance is responsible for handling incoming and outgoing HTTP requests, middleware, and routing logic. 
We then attach the express.json() middleware to parse JSON request bodies. Finally, we export the app so it can be used in another file like server.js to start the server.*/

app.use("/api/auth",authRouter)