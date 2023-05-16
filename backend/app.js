const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = 8000;
const app = express();

connectDB(
  "mongodb+srv://olowoniyidaniel:OGxAcdNItrMySPIA@cluster0.yc1o0ub.mongodb.net/"
);

app.use(cors());
app.use(express.json());
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`server listing at port ${PORT}`);
});
