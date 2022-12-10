let patientsData = [];
const patients = (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream('patients.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
        patientsData.push(data);
    })
    .on('end',()=>{
        console.log("patientsData data are fetched very well.");
        res.send(patientsData)
        patientsData=[];
    })
}
module.exports = patients;