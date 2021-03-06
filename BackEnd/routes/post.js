const express = require ('express');

const postController = require('../controller/postController')

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);


module.exports = router