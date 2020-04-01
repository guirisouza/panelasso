const Koa = require('koa')
const http = require('http')
const socket = require('socket.io')

const app = new Koa()
const server = http.createServer(app.callback())
const io = socket(server)

const SERVER_HOST = 'localhost'
const SERVER_PORT = '5000'

let visitors = 0

io.on('connection', socket=>{
    visitors++;
    console.log('estamos com ' + visits)
    console.log('[IO] Connection => Server has a new connection')
    socket.on('totalPaneleiroHits', data => {
        console.log('Total Hits', data)
        io.emit('totalPaneleiroHits', data)
    })
    socket.on('disconnect', () => {
        console.log('New connection was disconnected')
        visitors--;
    })
})

server.listen(SERVER_PORT, SERVER_HOST, ()=> {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`)
    console.log(`[HTTP] Listen => Press Ctrl+c to stop it`)
})