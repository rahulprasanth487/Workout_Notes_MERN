const express=require("express")
const router = express.Router()
const Workout=require("../models/WorkoutsModels")
const {
      getWorkouts,
      getWorkoutSingle,
      createWorkout,
      deleteWorkout,
      updateWorkout
} =require("../controllers/workoutController")


//get all workouts
router.get("/",getWorkouts)
router.get("/:id", getWorkoutSingle)
//POST A NEW WORKSOUT
router.post("/",createWorkout)
//DELETE
router.delete("/:id", deleteWorkout)
//update
router.patch("/:id",updateWorkout)
module.exports=router