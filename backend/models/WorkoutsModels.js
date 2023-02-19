const mongoose=require("mongoose");

mongoose.set('strictQuery',false)
const Schema=mongoose.Schema;

const workoutschema=new Schema({
      title:{
            type:String,
            required:true
      },
      reps:{
            type:Number,
            required:true
      },
      load:{
            type:Number,
            required:true
      }
},{collection:"WORKOUTS_LIST"},{timestamps:true})

module.exports=mongoose.model('Workout',workoutschema);
