const express = require('express')
const messageC = require('./controllers/messages_controller')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', messageC.create)
app.get('/api/messages', messageC.read)
app.put('/api/messages/:id', messageC.update)
app.delete('/api/messages/:id', messageC.delete)

app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`))