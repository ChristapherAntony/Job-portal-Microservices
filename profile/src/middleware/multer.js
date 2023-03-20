const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dprxebwil",
    api_key: "145417815256521",
    api_secret: "PckML-KZ-JVs3gIM_cW64L5FGew"
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
