const router = require("express").Router();
const  Workout = require ('../model/workout')
//Retrieves ALL workouts
router.get('/workouts', (req, res) => {
    Workout.find({})
      .then(workoutList => {
        res.json(workoutList);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});
// updates a workout by adding an exercise
router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate({ _id: req.params.id }, 
                              {$push: {"exercises":req.body}})
      .then(newWorkout => {
        res.json(newWorkout);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});

router.post('/workouts', (req, res) => {
    Workout.create(req.body)
      .then(newWorkout => {
        res.json(newWorkout);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});
  
  router.get("/workouts/:id", (req, res) => {
      Workout.find({}).sort({date: -1})
        .then(dbTransaction => {
          res.json(dbTransaction);
        })
        .catch(err => {
          res.status(404).json(err);
        });
    });

module.exports = router;
