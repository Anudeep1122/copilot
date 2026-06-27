"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const workoutSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    difficulty: { type: String, required: true },
    focus: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.Workout = mongoose_1.default.model('Workout', workoutSchema);
