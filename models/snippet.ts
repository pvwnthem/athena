import { Schema, model } from 'mongoose';

const snippetSchema = new Schema({
    title: {
        type: String,
        required: false,
        default: "Untitled"
    },
    content: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
});

export default model('Snippet', snippetSchema) || model('Snippet'); 