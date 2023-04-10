const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Recruiter',
        // format: async (req, file) => 'jpg',
        public_id: (req, file) => `recruiter-${file.originalname}`
    },
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
});

const upload = multer({ storage: storage });

module.exports = { upload };
