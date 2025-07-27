import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);