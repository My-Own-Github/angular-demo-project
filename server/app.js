

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let rtsIndex = require('./routes/index.router');

let app = express();

//middleware
app.use(bodyParser.json())
app.use(cors());
app.use('/api', rtsIndex)

//error Handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        let valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message))
        res.status(422).send(valErrors)
    }
})

//start server
app.listen(3000, () => {
    console.log("server started on port: ", 3000)
})