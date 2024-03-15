
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({}),
});

const handler = upload.single('file');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  return new Promise((resolve, reject) => {
    handler(req, res, (err) => {
      if (err) return reject(err);

      const file = req.file;
      console.log('File uploaded:', file);

      res.status(200).json({ success: true });
      resolve();
    });
  });
}
