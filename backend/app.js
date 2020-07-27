const express = require('express');

const app = express();


app.use('/api/posts',(req, res, next)=>{
    const posts = [
        {Id: '1212359', ProductName: 'Name 1', ProductDescription:'This is content',ProductPrice:2},
        {Id: '156554', ProductName: 'Name 2', ProductDescription:'This is content 2',ProductPrice:3}
    ];
    res.status(200).json({
        message:'Post fetched successfully!',
        posts: posts
    });
});

module.exports = app;