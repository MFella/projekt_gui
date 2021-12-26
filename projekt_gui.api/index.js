const express = require('express');
const cors = require('cors');
const passport = require('passport');
const routes = require('./routes/routes');
const config = require('./config/config');

const app = express();


app.use(cors({
    origin: config.origin
}))

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// later -> Passport
app.listenerCount(passport.initialize());
app.listenerCount(passport.session())

app.use(routes);

app.listen(config.port, () => {
    console.log('Server started. Listen on port ' + config.port);
})
