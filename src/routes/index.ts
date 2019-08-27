import {Router} from 'express'
const router = Router();

import upload from '../libs/multer'
import {getPhotos, createPhoto} from '../controllers/photo.controller'

// middleware
router.use(upload.single('image'));

// routes
router.route('/photos')
    .get(getPhotos)
    .post(createPhoto);

export default router;