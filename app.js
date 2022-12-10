const express = require('express');
const app = express();

const pharmacistsRoute = require('./routes/pharmacists');
const patientsRoutes = require('./routes/patients');
const physiciansRoutes = require('./routes/physicians');

app.use(pharmacistsRoute);
app.use(patientsRoutes);
app.use(physiciansRoutes);

const port = 5000 || process.env.port;
app.listen(port,()=>{
    console.log("App is running very well");
})






