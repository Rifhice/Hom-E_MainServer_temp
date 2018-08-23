var express = require("express");
const router = express.Router();
const Action_queue = require("../Database/Collection/Action_queue");

router.post("/", function(req, res) {
  Action_queue.write(req.body)
    .then(() => res.send({ result: "success" }))
    .catch(() => res.send({ result: "error" }));
});

module.exports = router;
