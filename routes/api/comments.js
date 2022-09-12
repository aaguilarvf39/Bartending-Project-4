const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

router.post('/drinks/:drinkId/comments', commentsCtrl.createComment);
router.delete('/comments/:id', commentsCtrl.deleteComment);

module.exports = router;