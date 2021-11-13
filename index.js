const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');

const app = express();
const port = 3001;


const todoRouter = require('./routes/todolist.routes')
app.use(express.json());
app.use(cors());

app.use('/', todoRouter);

Conn();
app.listen(port, () => {
    console.log(`Rodando servidor em http://localhost:${port}`);
});