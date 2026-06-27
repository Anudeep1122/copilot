import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
});

export const Activity = mongoose.model('Activity', activitySchema);
