const express = require ('express');
const router = express.Router();


router.get('/', function(req, res){
    console.log('GET request');
    res.send({name: 'Kevin'})
})