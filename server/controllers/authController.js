const db = require('../models/chationaryModels')
const { response } = require('../server')
const bcrypt = require('bcryptjs');
const { nextTick } = require('process');
const SALT_WORK_FACTOR = 10;

const authController = {}

authController.getPasskey = (req, res) => {
    const user = req.body.username

    const newQuery = `SELECT passkey FROM "profiles" WHERE username = $1`

    db.query(newQuery, [user], (err, result)
        .then(data => {
            res.locals.passkey = data
            return next()
        })
        .catch(err => {
            return next("no such user or password found")
        })
    )
}

authController.verifyUser = (req, res) => {
    const hashed = res.locals.passkey

    bcrypt.compare(req.body.password, hashed)
        .then(result => {
            if(result) return next()
            else res.status(404).redirect('/')
        })
        .catch(err => {
            return next(err)
        })
}