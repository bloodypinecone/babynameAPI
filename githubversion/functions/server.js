const express = require('express');
const cors = require('cors');
const { byName, byYear } = require('us-baby-names');
const app = express();

app.use(cors({ origin: true }))
   .use(express.json())
   .use(express.urlencoded({ extended: false }))
   .use("/bbn", require('./router'))  
   .get('*', (_, res) => res.status(404)
                            .json({ success: false, data: "Not found 404"}))

module.exports = app;
