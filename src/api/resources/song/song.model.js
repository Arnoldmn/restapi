import mongoose from 'mongoose';

const { schema } = mongoose;
const songSchema = new Schema({
    title: {
        type: String,
        required: [true, 'song must have title'],
    },
    url: {
        type: String,
        required: [true, 'Song must have url'],
    },
    artist: {
        type: String,
        required: [true, 'Song must have artist'],
    },

    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },

});

export default mongoose.model('Song', songSchema);