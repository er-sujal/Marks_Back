import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const marksSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    subjects: [{
        subjectName: {
            type: String,
            required: true
        },
        ia1Marks: {
            type: Number,
            required: true,
            min: 0,
            max: 30
        },
        ia2Marks: {
            type: Number,
            required: true,
            min: 0,
            max: 30
        },
        remainingMarks: {
            type: Number,
            required: true
        }
    }]
});

const Marks = model('Marks', marksSchema);

export default Marks;
