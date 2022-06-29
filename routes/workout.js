const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('partials/workout', {
                title: 'Enter Workout', 
                js: [
                    '<script src="/public/js/workout.js"></script>',
                    '<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js"></script>'
                ]
            });
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;