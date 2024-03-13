import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
