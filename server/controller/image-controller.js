import { GridFsStorage } from 'multer-gridfs-storage';
//import pkg from 'multer-gridfs-storage';
//import grid from 'multer-gridfs-storage';
import mongoose from 'mongoose';

const url = '';


let gfs, gridfsBucket;
//const {grid} = pkg;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
   // gfs = grid(conn.db, mongoose.mongo);
    gfs = gridfsBucket; 
   // gfs.collection('fs');
});


export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}