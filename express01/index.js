const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nti', (req, res) => {
    res.send('welcome in NTI')
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})