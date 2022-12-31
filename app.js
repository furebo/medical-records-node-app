const express = require('express');
const app = express();

const pharmacistsRoute = require('./routes/pharmacists');
const patientsRoutes = require('./routes/patients');
const physiciansRoutes = require('./routes/physicians');
const welcomeRoute = require('./routes/welcome');

app.use(pharmacistsRoute);
app.use(patientsRoutes);
app.use(physiciansRoutes);
app.use(welcomeRoute);
 
const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log("App is running very well");
})






