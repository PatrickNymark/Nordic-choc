const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AwardSchema = new Schema({
  year: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  rank: {
      type: Number,
  },
  region: {
      type: String
  }
});


module.exports = Awards = mongoose.model('awards', AwardSchema);
