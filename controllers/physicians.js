physiciansData=[]
const getPhysicians = (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream('physicians.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
        physiciansData.push(data);
    })
    .on('end',()=>{
        console.log("Physicians data are fetched very well.")
        res.send(physiciansData)
        physiciansData=[];
    })
}
module.exports = getPhysicians;