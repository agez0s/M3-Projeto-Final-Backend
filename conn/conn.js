const mongoose = require("mongoose");

const Conn = (url, user, pass, banco) => {
  mongoose
    .connect(`${url}/${banco}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Conectado");
    })
    .catch((err) => console.log("Erro de conexão com o banco", err));
};

module.exports = Conn;
