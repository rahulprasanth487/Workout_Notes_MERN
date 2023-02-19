const Workout=require('../models/WorkoutsModels')
const mongoose=require('mongoose')

//get all
const getWorkouts=async (req,res)=>{
      const workouts = await Workout.find({}).sort({ createdAt: -1 })
      res.status(200).json(workouts)
}


//get single
const getWorkoutSingle=async (req,res)=> {
      const {id}=req.params;

      if(!mongoose.Types.ObjectId.isValid(id))
      {
            return res.status(400).json({error:"No ssuch workout found"})
      }
      const workout=await Workout.findById(id)

      if(!workout)
      {
            return res.status(400).json({ error: "No workout found" }); 
      }

      res.status(200).json(workout)
}



//create one
const createWorkout = async (req,res) =>{
      const { title, load, reps } = req.body;

      //add doc to db
      try {
            const workout = await Workout.create({ title, load, reps });
            res.status(200).json(workout)

      } catch (err) {
            res.status(400).json({ error: err.message })
      }
}




//delete one
const deleteWorkout = async (req,res) => {
      const {id}=req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "No such workout found" })
      }
      const workout=await Workout.findOneAndDelete({_id:id})
      if (!workout) {
            return res.status(400).json({ error: "No workout found" });
      }
      res.status(200).json(workout);

}




//update one
const updateWorkout = async (req,res) =>{
      const {id}=req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "No ssuch workout found" })
      }

      const workout = await Workout.findOneAndUpdate({ _id: id },{...req.body})
      if (!workout) {
            return res.status(400).json({ error: "No workout found" });
      }

      res.status(200).json(workout )
}


module.exports={
      getWorkouts,
      getWorkoutSingle,
      createWorkout,
      deleteWorkout,
      updateWorkout
}