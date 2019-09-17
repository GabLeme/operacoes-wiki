const User = require("../models/user.model");
const jwt = require("jwt-simple");
require("dotenv").config();

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (token) {
        try {
            let decodedToken = jwt.decode(token, process.env.JWT_SECRET_KEY);

            if (decodedToken.exp <= Date.now()) res.status(400).send({ message: 'Token expirado' })

            User.findOne({ _id: decodedToken.iss }, (err, user) => {
                if (err) res.status(500).send({ message: 'Erro ao buscar usuario do token' })

                req.user = user;
                return next();
            })
        }
        catch (err) {
            return res.status(401).send({ message: 'Token invalido' })
        }
    }
    else {
        return res.status(401).send({ message: 'Token nao informado' })
    }
}