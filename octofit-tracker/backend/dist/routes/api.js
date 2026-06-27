"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const LeaderboardEntry_1 = require("../models/LeaderboardEntry");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get('/users/', async (_req, res) => {
    const users = await User_1.User.find({}).lean();
    res.json(users);
});
router.get('/teams/', async (_req, res) => {
    const teams = await Team_1.Team.find({}).populate('members').lean();
    res.json(teams);
});
router.get('/activities/', async (_req, res) => {
    const activities = await Activity_1.Activity.find({}).lean();
    res.json(activities);
});
router.get('/leaderboard/', async (_req, res) => {
    const leaderboard = await LeaderboardEntry_1.LeaderboardEntry.find({}).populate('userId').lean();
    res.json(leaderboard);
});
router.get('/workouts/', async (_req, res) => {
    const workouts = await Workout_1.Workout.find({}).lean();
    res.json(workouts);
});
exports.default = router;
