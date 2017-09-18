import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Schema defination
const gameSchema = new Schema({
  name: String,
  year: Number,
  description: String,
  picture: String,
  postDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Game', gameSchema);
