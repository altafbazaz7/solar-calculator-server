import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    panelsNeeded: {
        type: Number,
        required: true
    },
    requiredArea: {
        type: Number,
        required: true
    },
    capitalNeeded: {
        type: Number,
        required: true
    },
    breakevenYears: {
        type: Number,
        required: true
    },
    next25YearsEarnings: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
