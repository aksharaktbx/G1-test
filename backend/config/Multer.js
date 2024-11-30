const multer = require('multer');
const path = require('path');

// Set up Multer to store files in a 'uploads' folder and keep the original filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Keep the original file name
    cb(null, file.originalname);
  }
});

// Custom file filter to accept only png, jpg, and jpeg
const fileFilter = (req, file, cb) => {
  const allowedTypes = /png|jpg|jpeg/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true); // File is valid
  } else {
    cb(new Error('Only PNG, JPG, or JPEG files are allowed'), false); // Reject the file
  }
};

// Configure multer with storage and fileFilter
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // Limit to 10MB file size (optional)
});

module.exports = upload;
