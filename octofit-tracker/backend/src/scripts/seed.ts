import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Workout } from '../models/Workout';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(mongoUri);
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    {
      name: 'Ava Patel',
      email: 'ava@example.com',
      role: 'Student',
      fitnessLevel: 'Intermediate',
    },
    {
      name: 'Noah Kim',
      email: 'noah@example.com',
      role: 'Coach',
      fitnessLevel: 'Advanced',
    },
    {
      name: 'Mina Chen',
      email: 'mina@example.com',
      role: 'Student',
      fitnessLevel: 'Beginner',
    },
  ]);

  const teams = await Team.insertMany([
    {
      name: 'Trailblazers',
      description: 'A team focused on endurance and outdoor challenges.',
      members: [users[0]._id, users[2]._id],
    },
    {
      name: 'Speedsters',
      description: 'A team that loves sprint intervals and quick wins.',
      members: [users[1]._id],
    },
  ]);

  await Activity.insertMany([
    {
      name: 'Morning Run',
      points: 20,
      completedAt: new Date('2026-06-25T07:00:00Z'),
    },
    {
      name: 'Strength Training',
      points: 25,
      completedAt: new Date('2026-06-25T18:30:00Z'),
    },
    {
      name: 'Cycling Challenge',
      points: 30,
      completedAt: new Date('2026-06-26T06:15:00Z'),
    },
  ]);

  await LeaderboardEntry.insertMany([
    { userId: users[0]._id, score: 180, rank: 1 },
    { userId: users[1]._id, score: 165, rank: 2 },
    { userId: users[2]._id, score: 140, rank: 3 },
  ]);

  await Workout.insertMany([
    {
      title: 'Cardio Circuit',
      duration: '20 min',
      difficulty: 'Intermediate',
      focus: 'Endurance',
    },
    {
      title: 'Core Focus',
      duration: '15 min',
      difficulty: 'Beginner',
      focus: 'Abs and posture',
    },
  ]);

  console.log('Seed data inserted successfully');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
