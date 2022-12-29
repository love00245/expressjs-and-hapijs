const express = require('express')
const app = express()
const mySql = require('mysql')
const PORT = process.env.PORT || 3000

let connectDb = mySql.createConnection({
    host: "localhost",
    database: "sales",
    password: "love0024",
    user: "root"
})

connectDb.connect(err => {
    if (!err) {
        console.log("db connected success");
    }
    else throw err
})


app.get('/users', (req, res) => {
    let query = `SELECT *  FROM SALE`
    connectDb.query(query, (err, rows, fields) => {
        if (!err) {

            res.send(rows)
        }
    })
})


app.listen(PORT, () => {
    console.log('listening to port 3000');
})