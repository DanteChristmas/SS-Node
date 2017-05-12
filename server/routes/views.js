const express = require('express');
const router = express.Router();
const CmsController = require('../controllers/CmsController');

router.get('/admin', (req, res,next) => {
  CmsController.index(req, res, next);
});

router.get('/', (req, res, next) => {
  //sample stuff
  const posts = [
    {
      id: 1,
      author: 'John',
      title: 'Templating with EJS',
      body: 'Blog post number 1'
    },
    {
      id: 2,
      author: 'Drake',
      title: 'Express: Starting from the Bottom',
      body: 'Blog post number 2'
    },
    {
      id: 3,
      author: 'Emma',
      title: 'Streams',
      body: 'Blog post number 3'
    },
    {
      id: 4,
      author: 'Cody',
      title: 'Events',
      body: 'Blog post number 4'
    }
  ];


  res.render('ss', { posts: posts});
});

module.exports = router;
