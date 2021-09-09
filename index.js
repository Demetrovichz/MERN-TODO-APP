const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json({extended:true}))
app.use('/api/auth/', require('./routes/auth.route'))



const start = async () =>{
  try {
    await mongoose.connect('mongodb+srv://Double:12345@cluster0.l1hse.mongodb.net/HypeStore?retryWrites=true&w=majority',{ useNewUrlParser: true,
    keepAlive:true,
    useNewUrlParser: true,
  }); 
  app.listen(PORT, ()=>{
    console.log(`${PORT} - порт сервера`)
  })
  } catch (e) {
    console.log(e)
  }
}

start();