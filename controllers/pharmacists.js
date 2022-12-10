let result = [];
const getParmacists = (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
   const csv = require('csv-parser');
   const fs = require('fs');
   fs.createReadStream('drugs.csv')
   .pipe(csv({}))
   .on('data',(data)=>{
       result.push(data);
   })
   .on('end',()=>{
        console.log("drugs data are fetched very well.");
       res.send(result);
       result=[];
   })
}
module.exports = getParmacists;