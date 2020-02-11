
const Piece = require('../models/Piece');

module.exports = {
  create,
  all
}

/**
 * Create chocolate piece
 * @param {object} pieceData a object representing a chocolate piece
 * @returns a Promise or exception  
 */
async function create(pieceData) {
  const piece = await Piece.findOne({ title: pieceData.title });
  if(piece) throw 'Title "' + pieceData.title + '" already exists';
  
  const newPiece = new Piece(pieceData);
  return await newPiece.save(); 
}

/**
 * Get all chocolate pieces
 * @returns a Promise or exception  
 */
async function all() {
    return await Piece.find();    
}
