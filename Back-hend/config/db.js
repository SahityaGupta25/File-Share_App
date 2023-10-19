// !  IMPORTED

require('dotenv').config();

const mongoose = require('mongoose')


// !-------------------------------------------------------------------------

mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true,useCreateIndex : true , useUnifiedTopology: true , useFindAndModify:true});

mongoose.connection.once('open',()=>{
    console.log('Database connected.');
}).catch(err =>{
    console.log('Connection failed.');
})




