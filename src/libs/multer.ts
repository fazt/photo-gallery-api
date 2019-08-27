import multer from 'multer'
import path from 'path'
import uuid from 'uuid/v4';

// Settings
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
});
export default multer({storage});