require("dotenv").config()

const express=require('express');
const app=express();
const workoutRoutes=require("./routes/workouts")


const mongoose=require("mongoose");



//middleware
app.use(express.json())
app.use((req,res,next)=>{
      console.log(req.path,req.method);
      next()
})
 
//routes
// app.get("/",(req,res)=>{
//       res.json({mssg:"welcome to the app"})
// })

app.use("/api/workouts/",workoutRoutes)



//connect with db
mongoose.connect(process.env.MONGO_URI)
      .then(()=>{
            console.log("Connected")
            app.listen(process.env.PORT, () => {
                  console.log("Helo Rahul");
            })
      })
      .catch((err)=>{console.log(err.name)})


