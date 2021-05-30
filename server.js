'use strict';

const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hello form other side')
})
app.listen(PORT,()=>{
    console.log(`listening to PORT ${PORT}`);
})