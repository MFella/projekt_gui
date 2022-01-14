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
        sleep(400);
        if (req.body.username === "admin" && req.body.password === "admin") {
            const users = ["UserA", "UserB", "UserC"]
            const token = "AuthToken"
            return res(ctx.json({users: users, token: token}))
        } else {
            return res(ctx.status(401), ctx.json({status: "NOK"}))
        }
    }),

    rest.get('/orders/UserA', (req, res, ctx) => {
        sleep(400);
        return res(ctx.json({unpaid: 50, unsent: 35, refund: 12}))
    }),

    rest.get('/orders/UserB', (req, res, ctx) => {
        sleep(400);
        return res(ctx.json({unpaid: 55, unsent: 45, refund: 22}));
    }),

    rest.get('/orders/UserC', (req, res, ctx) => {
        sleep(400);
        return res(ctx.json({unpaid: 10, unsent: 12, refund: 5}));
    }),

    rest.get('/orders/details/*', (req, res, ctx) => {
        sleep(400)
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

    }),

    rest.get('/orders/chart/', (req, res, ctx) => {
        sleep(400);
        const resp = [
            {
                metric: 'Selt items',
                serie_1: [
                    {
                        period: '0:00 - 4:00',
                        value: 53
                    },
                    {
                        period: '4:00 - 8:00',
                        value: 99
                    },
                    {
                        period: '8:00 - 12:00',
                        value: 111
                    },
                    {
                        period: '12:00 - 16:00',
                        value: 222
                    },
                    {
                        period: '16:00 - 20:00',
                        value: 854
                    },
                    {
                        period: '20:00 - 24:00',
                        value: 232
                    },
                ],
                serie_2: [
                    {
                        period: '0:00 - 4:00',
                        value: 543
                    },
                    {
                        period: '4:00 - 8:00',
                        value: 162
                    },
                    {
                        period: '8:00 - 12:00',
                        value: 932
                    },
                    {
                        period: '12:00 - 16:00',
                        value: 372
                    },
                    {
                        period: '16:00 - 20:00',
                        value: 153
                    },
                    {
                        period: '20:00 - 24:00',
                        value: 234
                    },
                ]
            },
            {
                metric: 'Selt items',
                serie_1: [
                    {
                        period: 'Monday',
                        value: 3333
                    },
                    {
                        period: 'Tuesday',
                        value: 6565
                    },
                    {
                        period: 'Wednesday',
                        value: 1234
                    },
                    {
                        period: 'Thursday',
                        value: 7893
                    },
                    {
                        period: 'Friday',
                        value: 3199
                    },
                    {
                        period: 'Saturday',
                        value: 5341
                    },
                    {
                        period: 'Sunday',
                        value: 4821
                    },
                ],
                serie_2: [
                    {
                        period: 'Monday',
                        value: 5431
                    },
                    {
                        period: 'Tuesday',
                        value: 1324
                    },
                    {
                        period: 'Wednesday',
                        value: 8482
                    },
                    {
                        period: 'Thursday',
                        value: 7342
                    },
                    {
                        period: 'Friday',
                        value: 3165
                    },
                    {
                        period: 'Saturday',
                        value: 5454
                    },
                    {
                        period: 'Sunday',
                        value: 4223
                    },
                ]
            },
            {
                metric: 'Selt items',
                serie_1: [
                    {
                        period: 'Monday',
                        value: 4001
                    },
                    {
                        period: 'Tuesday',
                        value: 928
                    },
                    {
                        period: 'Wednesday',
                        value: 3251
                    },
                    {
                        period: 'Thursday',
                        value: 1231
                    },
                    {
                        period: 'Friday',
                        value: 6343
                    },
                    {
                        period: 'Saturday',
                        value: 643
                    },
                    {
                        period: 'Sunday',
                        value: 325
                    }
                ],
                serie_2: [
                    {
                        period: 'Monday',
                        value: 2314
                    },
                    {
                        period: 'Tuesday',
                        value: 1673
                    },
                    {
                        period: 'Wednesday',
                        value: 142
                    },
                    {
                        period: 'Thursday',
                        value: 3232
                    },
                    {
                        period: 'Friday',
                        value: 744
                    },
                    {
                        period: 'Saturday',
                        value: 1552
                    },
                    {
                        period: 'Sunday',
                        value: 124
                    },
                ]
            },
            {
                metric: 'Turnover',
                serie_1: [
                    {
                        period: '0:00 - 4:00',
                        value: 34
                    },
                    {
                        period: '4:00 - 8:00',
                        value: 53
                    },
                    {
                        period: '8:00 - 12:00',
                        value: 86
                    },
                    {
                        period: '12:00 - 16:00',
                        value: 102
                    },
                    {
                        period: '16:00 - 20:00',
                        value: 32
                    },
                    {
                        period: '20:00 - 24:00',
                        value: 12
                    },
                ],
                serie_2: [
                    {
                        period: '0:00 - 4:00',
                        value: 65
                    },
                    {
                        period: '4:00 - 8:00',
                        value: 54
                    },
                    {
                        period: '8:00 - 12:00',
                        value: 32
                    },
                    {
                        period: '12:00 - 16:00',
                        value: 75
                    },
                    {
                        period: '16:00 - 20:00',
                        value: 92
                    },
                    {
                        period: '20:00 - 24:00',
                        value: 73
                    },
                ]
            },
            {
                metric: 'Turnover',
                serie_1: [
                    {
                        period: 'Monday',
                        value: 5432
                    },
                    {
                        period: 'Tuesday',
                        value: 2351
                    },
                    {
                        period: 'Wednesday',
                        value: 9201
                    },
                    {
                        period: 'Thursday',
                        value: 5893
                    },
                    {
                        period: 'Friday',
                        value: 4631
                    },
                    {
                        period: 'Saturday',
                        value: 6832
                    },
                    {
                        period: 'Sunday',
                        value: 9001
                    },
                ],
                serie_2: [
                    {
                        period: 'Monday',
                        value: 4352
                    },
                    {
                        period: 'Tuesday',
                        value: 1235
                    },
                    {
                        period: 'Wednesday',
                        value: 6234
                    },
                    {
                        period: 'Thursday',
                        value: 6351
                    },
                    {
                        period: 'Friday',
                        value: 4911
                    },
                    {
                        period: 'Saturday',
                        value: 5671
                    },
                    {
                        period: 'Sunday',
                        value: 2222
                    },
                ]
            },
            {
                metric: 'Turnover',
                serie_1: [
                    {
                        period: 'Monday',
                        value: 3921
                    },
                    {
                        period: 'Tuesday',
                        value: 1953
                    },
                    {
                        period: 'Wednesday',
                        value: 2938
                    },
                    {
                        period: 'Thursday',
                        value: 3111
                    },
                    {
                        period: 'Friday',
                        value: 2901
                    },
                    {
                        period: 'Saturday',
                        value: 1902
                    },
                    {
                        period: 'Sunday',
                        value: 4004
                    }
                ],
                serie_2: [
                    {
                        period: 'Monday',
                        value: 2002
                    },
                    {
                        period: 'Tuesday',
                        value: 1853
                    },
                    {
                        period: 'Wednesday',
                        value: 3021
                    },
                    {
                        period: 'Thursday',
                        value: 4000
                    },
                    {
                        period: 'Friday',
                        value: 793
                    },
                    {
                        period: 'Saturday',
                        value: 2302
                    },
                    {
                        period: 'Sunday',
                        value: 1002
                    },
                ]
            }
        ];
        return res(ctx.json(resp));
    }),

    rest.get('/quality/', (req, res, ctx) => {
        sleep(400);
        const resp = {
            category: 'Average',
            lowestAspects: {
                service: 43,
                deliveryCost: 56,
                timeOfDelivery: 65
            },
            overallRatio: {
                rate: 76,
                leftToNext: 4,
                nextCategory: 'Good'
            }
        };
        return res(ctx.json(resp));
    })

]