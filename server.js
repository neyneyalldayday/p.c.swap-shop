// var bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3030;
const NEW_MESSAGE_EVENT = "new-message-event";

const app = express();
const server= http.createServer(app);

const io = socketIO(server, {
    cors: true,
    origins:["localhost:3000"]
});

app.use(cors());

const room = "general"




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

app.post('/messages', (req,res)=>{
    var message = new Message(req.body)
    message.save((err)=> {
        if(err)
          res.sendStatus(500)          
          io.emit('message', req.body)
          res.sendStatus(200)
    })   
})

io.on("connection", (socket) => {
    socket.join(room);

    socket.on(NEW_MESSAGE_EVENT, (data) => {
        io.in(room).emit(NEW_MESSAGE_EVENT, data);
    });


   socket.on("disconnect", ()=>{
       socket.leave(room);
   });
});

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb works doot')
})

server.listen(PORT, () => {
    console.log(`server be doing things on *:${PORT}`);   
})


