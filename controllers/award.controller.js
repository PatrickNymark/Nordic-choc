const express = require('express');
const router = express.Router();
const awardService = require('../services/award.service');

router.post('/', createAward);
router.get('/', findAll);
router.delete('/:id', removeAward);
// router.get('/:id', getPiece)
module.exports = router;

function createAward(req, res, next) {
    awardService.create(req.body)
        .then(award => res.json(award))
        .catch(err => next(err))
}

function findAll(req, res, next) {
    awardService.all(req.body)
        .then(awards => res.json(awards))
        .catch(err => next(err))
}

function removeAward(req, res, next) {
    awardService.remove(req.body.id)
        .then(award => res.json(award))
        .catch(err => next(err))
}

