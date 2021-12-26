const express = require('express');
const router = new express.Router;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
router.post('/login', (req, res) => {
    delay(1000).then(r => {
        if (req.body.username === "admin" && req.body.password === "admin") {
            const users = ["UserA", "UserB", "UserC"]
            const token = "AuthToken"
            res.send({users: users, token: token})
        } else {
            res.status(401);
            res.send("NOK")
        }
    });
})

router.get('/orders/UserA', (req, res) => {
    delay(1000).then(r => {
        res.send({unpaid: 50, unsent: 35, refund: 12});
    });
})

router.get('/orders/UserB', (req, res) => {
    delay(1000).then(r => {
        res.send({unpaid: 55, unsent: 45, refund: 22});
    });
})

router.get('/orders/UserC', (req, res) => {
    delay(1000).then(r => {
        res.send({unpaid: 10, unsent: 12, refund: 5});
    });
})

router.get('/orders/details/*', (req, res) => {
    delay(1000).then(r => {
        const resp = [
            {
                id: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
            {
                id: 2,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
            {
                id: 3,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
            {
                id: 4,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
            {
                id: 5,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
            {
                id: 6,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                date: Date().toLocaleString().split("GMT")[0],
                total: 11.11
            },
        ]
        res.send(resp);
    });
})

module.exports = router;