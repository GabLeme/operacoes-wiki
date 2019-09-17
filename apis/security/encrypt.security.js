const crypto = require("crypto-js");
require("dotenv").config();

exports.encrypt = (data) => {
    return crypto.AES.encrypt(JSON.stringify(data), process.env.PRIVATE_KEY).toString();
}

exports.decrypt = (data) => {
    const bytes = crypto.AES.decrypt(data, process.env.PRIVATE_KEY);
    if (bytes.toString()) {
        return JSON.parse(bytes.toString(crypto.enc.Utf8));
    }
}