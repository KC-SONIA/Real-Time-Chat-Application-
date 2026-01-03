const app = require("./app");
const port = 5000;
require("dotenv").config();
const connectDB = require("./config/mongodb")
connectDB();

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});