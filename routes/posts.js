const router = require("express").Router();
const auth = require("./verifyToken");

router.get("/", auth, (req, res) => {
  res.json({
    posts: {
      title: "my first post",
      description: "random data you shouldn't access",
    },
  });
});

module.exports = router;
