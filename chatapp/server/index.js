
const express=require('express')
const app=express();//app is the instance of our express app.
const http=require('http');
const server=http.createServer(app)//writing app means we are calling express here.
const socketIO=require('socket.io')

const cors=require('cors');

const port=4000;
const users=[{}];

app.use(cors())//cors is used for inter communication between url 

app.get('/', (req, res) => { res.send('HELL ITS WORKING') })
const io=socketIO(server);//instance of socket.

io.on('connect',(socket)=>{
    console.log('a new user connected');

   socket.on('joined',(data)=>{

     var info2=data.info;
     users[socket.id]=info2
    console.log(`${info2} has joined`) 
    socket.broadcast.emit('userjoined',{user:"Admin:",message:`${users[socket.id]} has joined`})
    
   socket.emit('welcome',{user:"Admin",message:`welcome to the chat,${users[socket.id]}`})
   }) 

   socket.on('message',({message,id})=>{
    
      
    io.emit('sendMessage',{user:users[id],message,id})
       
   })

   socket.on('disconnectt',()=>{
    socket.broadcast.emit('leave',{user:'Admin',message:`${users[socket.id]} has left`})
   
   })


});

server.listen(port,()=>{
    console.log("server is working at http://localhost:4000/")
})


