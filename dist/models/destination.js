"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const destinationSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    activities: {
        type: [String],
        required: true
    }
});
// create Model def and make public
const Destination = mongoose_1.default.model('Destination', destinationSchema);
exports.default = Destination;
