const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const axios = require("axios");

const multerStorage = multer.memoryStorage();

// Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('Not an image! Please upload only images.', false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

// Function to handle single image upload and resize
const uploadImage = upload.single('image'); // Assuming 'image' is the field name in the form

const resizeImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        const ext = req.file.mimetype.split('/')[1];
        const filename = `image-${Date.now()}.${ext}`;

        await sharp(req.file.buffer)
            .resize({ width: 800, height: 600, fit: 'inside' })
            .toFile(path.resolve(`public/img/${filename}`));

        // const imageUrl = `https://api.reviseukmla.com/api/v1/img/${filename}`;
        const imageUrl = `http://localhost:8080/img/${filename}`;
        return res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    uploadImage,
    resizeImage
};
