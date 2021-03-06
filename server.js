const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

// Conecta no MongoDB
  mongoose.connect('mongodb+srv://PedroA:p5kseasus@cluster0-08d87.mongodb.net/test?retryWrites=true&w=majority', {autoIndex: false})

// Carrega o model de Usuário
require("./models/user");

app.use(cors())

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(process.env.PORT || 3000);
