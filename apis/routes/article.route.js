module.exports = (app) => {
    const articles = require("../controllers/article.controller");
    
    app.post("/articles", articles.create);
    app.get("/articles", articles.getAll);
    app.get("/articles/filter", articles.getByTool);
}