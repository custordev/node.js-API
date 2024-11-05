import express from "express";
import customerRouter from "./routes/customer";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.listen(PORT, () => {
  // Start the server and listen on the specified port
  console.log(`Server is running on http://localhost:${PORT}`); // Log a message indicating the server is running
});

app.use("/api/v1", customerRouter);
// Create an API
// GET, POST,PUT,PATCH,DELETE
// http:localhost:8000/customers
