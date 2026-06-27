import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  difficulty: { type: String, required: true },
  focus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Workout = mongoose.model('Workout', workoutSchema);
