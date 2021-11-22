if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const cors = require("cors");
const Conn = require("./conn/conn");

const app = express();
const port = 3001;

const todoRouter = require("./routes/todolist.routes");
app.use(express.json());
app.use(cors());

app.use("/", todoRouter);

const DB_URL = process.env.DB_URL
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATA = process.env.DB_DATA

Conn(DB_URL, DB_USER, DB_PASS, DB_DATA);
app.listen(process.env.PORT || port, () => {
  console.log(`Rodando servidor em http://localhost:${port}`);
});
