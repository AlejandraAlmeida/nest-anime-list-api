import { Schema } from 'mongoose';

export const animeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    score: Number,
    imageURL: String,
    status: String,
    date: {
        type: Date,
        default: Date.now
    }
})
