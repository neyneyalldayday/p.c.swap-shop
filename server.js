var express = require("express")
// var bodyParser = require('body-parser')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')
var PORT = process.env.PORT || 8080
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];


app.use(express.static(__dirname))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

var dbUrl = 'mongodb+srv://neyneyalldayday:FrankY242424!@cluster0.dbld7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



var Message = mongoose.model('Message', {

    name : String,
    message: String

})

app.get('/messages', (req,res) => {
    Message.find({}, (err,messages) => {
    res.send(messages)
    })
   
})

// app.post('/messages', (req,res)=>{
//     var message = new Message(req.body)
//     message.save((err)=> {
//         if(err)
//           sendStatus(500)          
//           io.emit('message', req.body)
//           res.sendStatus(200)
//     })   
// })

io.on('connection', (socket) => {
    console.log('user connected')
    socket.emit('connection', null)
})

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb works doot')
})

http.listen(PORT, () => {
    console.log(`server be doing things on *:${PORT}`);   
})


