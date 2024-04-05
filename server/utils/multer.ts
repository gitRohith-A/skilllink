import multer from 'multer';
import { Request as ExpressRequest } from 'express';
import { FileFilterCallback } from 'multer';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

// Multer configuration
const storage = multer.diskStorage({
    destination: function (_req: ExpressRequest, _file: Express.Multer.File, cb: DestinationCallback) {
        cb(null, 'public/uploads/');
    },
    filename: function (_req: ExpressRequest, file: Express.Multer.File, cb: FileNameCallback) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

export const fileFilter = (
    _request: ExpressRequest,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true);
    } else {
        callback(new Error('Invalid file type'));
    }
};

export const upload = multer({ storage: storage, fileFilter: fileFilter });
