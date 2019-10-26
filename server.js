const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors = require('cors')
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist', 'my-app')))

const API_KEY = "AIzaSyBWEpNwYS4ahpiimiem5feDWWxQ6vRQQ74";
const baseApiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?";


const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Albany&key=AIzaSyBWEpNwYS4ahpiimiem5feDWWxQ6vRQQ74"


app.get('/api/hello', (req, res) => res.send('Hello World!'))
app.get('/api/new', (req, res) => {
    console.log("entering api");
    console.log(req.query.input);
    URL = baseApiUrl + 'query=restaurants+in+' + req.query.input + "&key=" + API_KEY;
    console.log("URL: " + URL);
    request.get(URL)
        .pipe(res);

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))