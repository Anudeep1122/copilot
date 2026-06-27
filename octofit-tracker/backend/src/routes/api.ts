import { Router } from 'express';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const router = Router();

router.get('/users/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json(users);
});

router.get('/teams/', async (_req, res) => {
  const teams = await Team.find({}).populate('members').lean();
  res.json(teams);
});

router.get('/activities/', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json(activities);
});

router.get('/leaderboard/', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).populate('userId').lean();
  res.json(leaderboard);
});

router.get('/workouts/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json(workouts);
});

export default router;
