const mongoose = require ('mongoose');

const exerciseSchema = mongoose.Schema ({
    name: {
        type:String,
        required: true,
    },
    type: {
        type:String,
        required: true,
    },
    weight: {
        type:Number
    },
    reps: {
        type:Number
    },
    sets: {
        type:Number
    },
    distance: {
        type:Number
    },
    duration: {
        type:String
    }
});

const workoutSchema = mongoose.Schema ({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [exerciseSchema],
    totalDuration: {
        type: Number,
        default: 0
    },
});

const Workout = mongoose.model ('Workout', workoutSchema);

module.exports = Workout;