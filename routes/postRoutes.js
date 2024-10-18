const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const multer = require('multer');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});
const upload = multer({ storage: storage });

// Routes for post operations
router.post('/', upload.single('image'), postController.createPost);    
router.get('/getPost', postController.getAllPosts);                 
router.get('/:id', postController.getPostById);                       
router.put('/:id', upload.single('image'), postController.updatePost);    
router.delete('/:id', postController.deletePost);                          

module.exports = router;
