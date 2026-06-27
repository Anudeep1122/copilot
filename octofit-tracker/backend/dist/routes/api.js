"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users = [
    { id: 1, name: 'Ava', role: 'Student' },
    { id: 2, name: 'Noah', role: 'Coach' },
];
const teams = [
    { id: 1, name: 'Trailblazers', members: 8 },
    { id: 2, name: 'Speedsters', members: 6 },
];
const activities = [
    { id: 1, name: 'Morning Run', points: 20 },
    { id: 2, name: 'Strength Training', points: 25 },
];
const leaderboard = [
    { id: 1, name: 'Ava', score: 180 },
    { id: 2, name: 'Noah', score: 165 },
];
const workouts = [
    { id: 1, title: 'Cardio Circuit', duration: '20 min' },
    { id: 2, title: 'Core Focus', duration: '15 min' },
];
router.get('/users/', (_req, res) => {
    res.json(users);
});
router.get('/teams/', (_req, res) => {
    res.json(teams);
});
router.get('/activities/', (_req, res) => {
    res.json(activities);
});
router.get('/leaderboard/', (_req, res) => {
    res.json(leaderboard);
});
router.get('/workouts/', (_req, res) => {
    res.json(workouts);
});
exports.default = router;
