const express = require('express');
const router = new express.Router;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
router.post('/login', (req, res) => {
    delay(1000).then(r => {
        if(req.body.username === "admin" && req.body.password === "admin") {
            const users = ["UserA", "UserB", "UserC"]
            const token = "TOKENNN"
            res.send({users: users, token: token})
        } else {
            res.status(401);
            res.send("NOK")
        }
    });
})

module.exports = router;