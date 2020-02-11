const express = require('express');
const router = express.Router();
const pieceService = require('../services/piece.service');

router.post('/', createPiece);
router.get('/', allPieces);
// router.get('/:id', getPiece)
module.exports = router;

function createPiece(req, res, next) {
    pieceService.create(req.body)
        .then(piece => res.json(piece))
        .catch(err => next(err))
}

function allPieces(req, res, next) {
    pieceService.all()
        .then(pieces => res.json(pieces))
        .catch(err => next(err))
}


