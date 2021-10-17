import *  as express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Welcome to dark-side-express!' });
});

export const SearchApi = router;
