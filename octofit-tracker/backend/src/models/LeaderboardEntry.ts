import mongoose from 'mongoose';

const leaderboardEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
