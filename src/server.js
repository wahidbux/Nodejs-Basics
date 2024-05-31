import express from 'express'

const app = express();

app.get('/api/home',(req,res)=>{
 res.send({name:AMeen});
});

app.post('/api/home',(req,res)=>{
  res.send('Hello world');
 });

const PORT=3000;
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})