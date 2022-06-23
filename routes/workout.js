const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('partials/workout', { title: 'Enter Workout', js: 'workout.js' });
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;