const express = require('express');
const connection=require("./config/db")
const cors = require("cors");
const PORT=4000;
const routes=require("./Routes/RoutesCompo")

const app = express();

// Corspolicy used here 
app.use(cors({
    origin : "*"
}))
// body parser used here
app.use(express.json());

app.use("/",routes)

app.listen(PORT,async ()=>{
    try{ 
      await connection();
      console.log(`server started after making connection `,PORT)}
    catch(err){
      console.log(err,"error occured due to server start")
    }
   
  })