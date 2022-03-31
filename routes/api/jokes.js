const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();


const Joke = require('../../models/jokes');

// @route   GET api/jokes
// @desc    GET All Jokes
// @access  Public

router.get('/', (req, res) => {
    Joke.find()
        .then(items => res.json(items));
});

// @route   POST api/jokes
// @desc    Create a Joke
// @access  Public

router.post('/', (req, res) => {
    const newJoke = new Joke({
        name: req.body.name
    });
    
    newJoke.save().then(item => res.json(item));
});

// @route   DELETE api/jokes
// @desc    Delete a Joke
// @access  Public

router.delete('/:id', (req, res) => {
    Joke.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
});
    

module.exports = router;