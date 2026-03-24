import express from 'express';
import multer from 'multer';
import { getUserProfile, updateUserProfile, getUserOrders } from '../controllers/userController.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import path from 'path';

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1 MB
  fileFilter: function (req, file, cb) {
    const allowed = ['.png', '.jpg', '.jpeg', '.pdf'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowed.includes(ext)) {
      return cb(new Error('Only .png, .jpg, .jpeg, .pdf files are allowed'));
    }
    cb(null, true);
  },
});

const multipleUploads = upload.fields([
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'aadharCard', maxCount: 1 },
  { name: 'panCard', maxCount: 1 },
]);

// Routes
router.get('/profile', verifyToken, getUserProfile);
router.get('/orders', verifyToken, getUserOrders);

// router.put('/profile', verifyToken, (req, res, next) => {
//   multipleUploads(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(400).json({ message: 'File too large (max 1MB)' });
//     } else if (err) {
//       return res.status(400).json({ message: err.message });
//     }
//     next();
//   });
// }, updateUserProfile);
router.put('/profile', verifyToken, (req, res, next) => {
  multipleUploads(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'File too large. Max size is 1MB.' });
    } else if (err) {
      return res.status(400).json({ message: err.message }); // Wrong file type
    }
    next();
  });
}, updateUserProfile);


export default router;
