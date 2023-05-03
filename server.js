const express =require('express');
//const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const finalProductRoutes = require('./routes/finalProductRoutes');
const rawMaterialRoutes = require('./routes/rawMaterialRoutes');
const packageRoutes = require('./routes/packageRoutes');
const fctOrderRoutes = require('./routes/fctOrderRoutes');
const rmOrderRoutes = require('./routes/rmOrderRoutes');
const pkgOrderRoutes = require('./routes/pkgOrderRoutes');
const dstOrderRoutes = require('./routes/dstOrderRoutes');
const dstFPRoutes = require('./routes/dstFPRoutes');
const rtlOrderRoutes = require('./routes/rtlOrderRoutes');
const rtlFPRoutes = require('./routes/rtlFPRoutes');



require('./config/connect');


const app = express();
app.use(express.json()); 

app.use("/uploads", express.static("uploads"));

// Server Port
app.listen(3000, ()=>{
    console.log('server work, PORT:3000 ')
});

//Routes
app.get('/',(req,res)=>{
    res.send('get work!');
    console.log('Welcome!');
})

app.use(userRoutes);
app.use(finalProductRoutes);
app.use(rawMaterialRoutes);
app.use(packageRoutes);
app.use(fctOrderRoutes);
app.use(rmOrderRoutes);
app.use(pkgOrderRoutes);
app.use(dstOrderRoutes);
app.use(dstFPRoutes);
app.use(rtlOrderRoutes);
app.use(rtlFPRoutes);

