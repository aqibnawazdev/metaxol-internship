const url = require('url');
const fs = require('fs');
const express = require('express');
const app = express();


app.get('/index.html', (req, res) => {

    let path = url.parse(req.url).pathname.substring(1)

    fs.readFile(path, (err, data) => {

        if (err) {
            res.status(404).send()
        } else {

            res.status(200).send(data.toString())
        }
    })
})

app.listen(8081, () => console.log("server is runnig"))