import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('Tippler Server')
})

server.listen(3000, () => console.log('TipplerServer listening on port 3000'))

