const express = require('express');
const app = express();
const port = process.env.PORT | 3000;

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 200,
        message: 'Hello World'
    })
});

app.listen(port,()=>{
    console.log('app running');
})
