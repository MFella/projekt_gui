import {rest} from 'msw'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        sleep(1000);
        if (req.body.username === "admin" && req.body.password === "admin") {
            const users = ["UserA", "UserB", "UserC"]
            const token = "AuthToken"
            return res(ctx.json({users: users, token: token}))
        } else {
            return res(ctx.status(401), ctx.json({status: "NOK"}))
        }
    }),

    rest.get('/orders/UserA', (req, res, ctx) => {
        sleep(1000);
        return res(ctx.json({unpaid: 50, unsent: 35, refund: 12}))
    }),

    rest.get('/orders/UserB', (req, res, ctx) => {
        sleep(1000);
        return res(ctx.json({unpaid: 55, unsent: 45, refund: 22}));
    }),

    rest.get('/orders/UserC', (req, res, ctx) => {
        sleep(1000);
        return res(ctx.json({unpaid: 10, unsent: 12, refund: 5}));
    }),

    rest.get('/orders/details/*', (req, res, ctx) => {
        sleep(1000)
        const resp = [{
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        }, {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        }, {
            id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        }, {
            id: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        }, {
            id: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        }, {
            id: 6,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: Date().toLocaleString().split("GMT")[0],
            total: 11.11
        },]
        return res(ctx.json(resp));

    })]