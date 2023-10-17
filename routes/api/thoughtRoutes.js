const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/ThoughtController.js");

// /api/Thoughts
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId/reaction").post(createReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

// /api/Thoughts/:ThoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
