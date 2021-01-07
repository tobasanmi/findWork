const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const employerRouter = require('./routes/employerroutes');
const freelancerRouter = require('./routes/freelancerRoutes');
const jobRouter = require('./routes/jobsRoutes');
const loginRouter = require('./routes/loginRoutes');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mini-upwork-app',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('connected to mongoDB')
}).catch((err)=>{
  console.log(err)
})

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({credentials: true, origin: '*'}))
app.use('/employer', employerRouter);
app.use('/freelancer', freelancerRouter);
app.use('/jobs',jobRouter);
app.use('/user',loginRouter);
// app.use(cors({credentials: true, origin: '*'}));

app.listen(3001, ()=> console.log('app started on port 3001'));