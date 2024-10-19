import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'; // for directly uploading data to mongodb
import dotenv from 'dotenv';

dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const storage = new GridFsStorage({


    url : `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.hdkm8.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 