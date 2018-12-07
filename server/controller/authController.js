const bcrypt = require('bcryptjs');
const genUtil = require('../../src/utilities/genUtil');
const axios = require('axios');

module.exports = {
    login: (req, res)=> {
        const db = req.app.get('db');
        const {email, pw} = req.body;
    },

    register: async (req, res)=> {
        const db = req.app.get('db');
        const{email, pw, confirmPW, firstName, lastName} = req.body;
        
        let lowerCaseEmail = email.toLowerCase();

        if(!genUtil.verifyPW(pw, confirmPW)) {
            res.sendStatus(400);
        } else {
            await db.CHECK_EMAIL([lowerCaseEmail]).then((users)=> {
                if(users.length !==0) {
                    if(users[0].email === lowerCaseEmail){
                        res.status(400).send("Please Login");
                    }
                } else {
                    const salt = bcrypt.genSaltSync(10);
                    const hash  = bcrypt.hashSync(confirmPW, salt);

                    db.CREATE_USER([lowerCaseEmail, firstName, lastName, hash]).then((result)=> {
                        res.sendStatus(200);
                    }).catch((err) => {
                        console.log(`Server error while attempting to create user: ${err}`)
                        res.sendStatus(500);
                    })
                }
            }).catch((err) => {
                console.log(`Server error while attempting to check email at register: ${err}`)
                res.sendStatus(500);
            })
        }
    }
}