import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { verifyToken, verifyAdminOrSeller } from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '_')}`);
  }
});
const upload = multer({ storage });

const router = express.Router();

router.get('/', getBlogs);
router.post('/', verifyToken, verifyAdminOrSeller, upload.single('coverImage'), createBlog);
router.put('/:id', verifyToken, verifyAdminOrSeller, upload.single('coverImage'), updateBlog);
router.delete('/:id', verifyToken, verifyAdminOrSeller, deleteBlog);

export default router;
