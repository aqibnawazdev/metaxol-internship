const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const fs = require('fs');
const app = express()


app.get('/', (req, res) => {

    fs.readFile('./db.json', (err, data) => {
        if (err) return new Error(err)

        res.status(200).send(JSON.parse(data))

    })
})

app.listen(8081, () => console.log("express server is running.."))