import  express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.post("/data",(req,res)=>{

    const {names,ages} = req.body;

  res.json(
    {
       data : `hi ${names} you ${ages} old`
    }
  )
})



app.get("/informasion",(req,res)=>{

    const {names,ages} = req.headers;

  res.json(
    {
       data : `hi ${names} you ${ages} old`
    }
  )
})


app.get("/name",(req,res)=>{

    const {collage,adderes} = req.query;

  res.json(
    {
       data : `Collage is ${collage} Form ${adderes} old`
    }
  )    
})


app.get("/food/:type", (req , res)=>{

    const {type} = req.params;

    if(type == "veg"){
        return res.json({
            meg : "You Have ordered veg Food"
        })
    }

    if(type == "non-veg"){
        return res.json ({
            mes : "You have Ordered  Non-Veg Food"
        })
    }

})


app.listen(PORT,()=>{
    console.log(`'Server is running on port ${PORT}`)
})

