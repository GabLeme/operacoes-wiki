const Article = require("../models/article.model");

require("dotenv").config();

exports.create = (req, res) => {

    const newArticle = new Article({
        nomeFerramenta: req.body.nomeFerramenta,
        tituloArtigo: req.body.tituloArtigo,
        conteudoArtigo: req.body.conteudoArtigo,
        autor: req.body.autor,
        dataCriacao: req.body.dataCriacao
    })

    newArticle.save()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Nao foi possivel criar o artigo"
            })
        })
}


exports.getAll = (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) res.status(500).send({ message: 'Error' })
        res.send(articles)
    })
}

exports.getByTool = (req, res) => {
    Article.find({ 'nomeFerramenta': req.query.nomeFerramenta }, (err, articles) => {
        if(err) res.status(500).send({ message: "erro" })
        res.send(articles);
    })
}

