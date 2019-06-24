const express = require('express')
const path = require('path')
const PORT = process.env.PORT|| 3015;
const app = express();

app.use(express.static(path.join(__dirname, '../client')))

app.listen(PORT, () => console.log(`Server Started on ${PORT}`))
