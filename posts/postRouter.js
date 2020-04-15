const express = require("express");

const router = express.Router();

const posts = require("./postDb");

router.get("/", (req, res) => {
  // do your magic!
  posts
    .get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/:id", validatePostId(), (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});

router.delete("/:id", validatePostId(), (req, res, next) => {
  // do your magic!
  posts
    .remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: "The post has been deleted" });
    })
    .catch(error => {
      next(error);
    });
});

router.put("/:id", validatePostId(), (req, res, next) => {
  // do your magic!
  posts
    .update(req.params.id, req.body)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      next(error);
    });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    posts
      .getById(req.params.id)
      .then(post => {
        if (post) {
          req.user = post;
          next();
        } else {
          res.status(404).json({ message: "invalid post id" });
        }
      })
      .catch(error => {
        next(error);
      });
  };
}

module.exports = router;
