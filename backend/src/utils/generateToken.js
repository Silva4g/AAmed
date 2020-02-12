
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = function generateToken(params={}) {
    return jwt.sign(params, authConfig.secret, {expiresIn:86400} )
};