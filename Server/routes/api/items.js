const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({noitemsfound: 'No item found'}));
});
    
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({noitemfound: 'No item found'}))
});
router.post('/', (req, res) => {Item.create(req.body)
    .then((item) => res.json({msg: 'Item added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated successfuly'}))
        .catch((err) => res.status(400).json({error: 'Unable to update the Database'}));
});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({msg: 'Deleted successfuly'}))
        .catch((err) => res.status(400).json({error: 'Unable to delete'}));
});

module.exports = router;