exports.emptyBody = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return true;
    }
    else {
        return false;
    }
}

exports.validateEmail = (req, res) => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (emailRegexp.test(req.body.email)) {
        return true;
    }
    else {
        return false;
    }
}
