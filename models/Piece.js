const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PieceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
      type: Array,
  } 
});


module.exports = Piece = mongoose.model('pieces', PieceSchema);
