const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    nomeFerramenta: String,
    tituloArtigo: String,
    conteudoArtigo: String,
    autor: String,
    dataCriacao: String
})

module.exports = mongoose.model("Article", ArticleSchema);