const express = require('express');
const app = express();
//const cors = require('cors');

const port = 5000 || process.env.port;
app.listen(port,()=>{
    console.log("App is running very well");
})

let users = [];
let result = [];
app.get('/pharmacists',(req,res)=>{
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream('drugs.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
        result.push(data);
        users.push(data);
    })
    .on('end',()=>{
         console.log("drugs data are fetched very well.");
        res.send(result);
        result=[];
    })
})
let physiciansData = [];
app.get('/physicians',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream('physicians.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
        physiciansData.push(data);
        users.push(data);
    })
    .on('end',()=>{
        console.log("Physicians data are fetched very well.")
        res.send(physiciansData)
        physiciansData=[];
    })
})

let patientsData = [];
app.get('/patients',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream('patients.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
        patientsData.push(data);
        users.push(data);
    })
    .on('end',()=>{
        console.log("patientsData data are fetched very well.");
        res.send(patientsData)
        patientsData=[];
    })
})


