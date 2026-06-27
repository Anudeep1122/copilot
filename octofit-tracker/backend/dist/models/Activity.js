"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const activitySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    completedAt: { type: Date, default: Date.now },
});
exports.Activity = mongoose_1.default.model('Activity', activitySchema);
