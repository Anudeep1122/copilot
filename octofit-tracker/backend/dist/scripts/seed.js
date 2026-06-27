"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../models/User");
const Team_1 = require("../models/Team");
const Activity_1 = require("../models/Activity");
const LeaderboardEntry_1 = require("../models/LeaderboardEntry");
const Workout_1 = require("../models/Workout");
dotenv_1.default.config();
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    console.log('Seed the octofit_db database with test data');
    await mongoose_1.default.connect(mongoUri);
    await Promise.all([
        User_1.User.deleteMany({}),
        Team_1.Team.deleteMany({}),
        Activity_1.Activity.deleteMany({}),
        LeaderboardEntry_1.LeaderboardEntry.deleteMany({}),
        Workout_1.Workout.deleteMany({}),
    ]);
    const users = await User_1.User.insertMany([
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
    const teams = await Team_1.Team.insertMany([
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
    await Activity_1.Activity.insertMany([
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
    await LeaderboardEntry_1.LeaderboardEntry.insertMany([
        { userId: users[0]._id, score: 180, rank: 1 },
        { userId: users[1]._id, score: 165, rank: 2 },
        { userId: users[2]._id, score: 140, rank: 3 },
    ]);
    await Workout_1.Workout.insertMany([
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
    await mongoose_1.default.disconnect();
}
seed().catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
});
