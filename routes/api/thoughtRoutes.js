const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/ThoughtController.js");

// /api/Thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route("/:ThoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
