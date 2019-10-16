const express = require('express')
const {
    PORT
} = require('./conif.json')
const allRouter = require("./roure")
const app = express()

app.use(express.static('./'))
app.use(allRouter)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})