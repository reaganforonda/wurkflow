const bcrypt = require('bcryptjs');
const genUtil = require('../../src/utilities/genUtil');

module.exports = {
    login: (req, res)=> {
        const db = req.app.get('db');
        const {email, pw} = req.body;
    },

    register: (req, res)=> {
        const db = req.app.get('db');
        const{email, pw} = req.body;
    }
}