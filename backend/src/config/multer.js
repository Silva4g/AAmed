const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk'); //serviço da amazon
const multerS3 = require('multer-s3'); //interação amazon e multer

const storageTypes = {
    local: multer.diskStorage({ //armazenamento de arquivos local
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            });
        }
    }),
    s3: multerS3({ //serviço da amazon para armazenamento de arquivos
        s3: new aws.S3(),
        bucket: 'upload-tcc-node',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        }
    }),
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes["local"],
    limits: { //tamanho suportado
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {//arquivos suportados
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de arquivo não suportado'));
        }
    },

};