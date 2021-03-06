const express = require('express');
const bodyParser = require('body-parser');
const port = 8000 || process.env.PORT;
const app = express();
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Conexão com DB realizada com sucesso");
    })
    .catch((err) => {
        console.log("Não foi possível se conectar ao DB.");
        throw err;
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

require('./routes/article.route')(app);
require('./routes/comment.route')(app);

app.listen(port, () => {
    console.log("Server rodando na porta:", port)
})

