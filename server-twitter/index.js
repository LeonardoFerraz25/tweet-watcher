const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const twitterRoutes = require('./routes/twitterRoutes')

app.use(cors())

app.use('/twitter', twitterRoutes)

app.listen(port, () => console.log(`Server running in ${port}!`))