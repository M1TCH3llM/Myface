const { Thought, User, Reaction } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.courseId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No course with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        userName: req.body.userName,
      });

      const user = await User.findOneAndUpdate(
        { userName: req.body.userName },
        { $push: { thoughts: thought } },
        { new: true }
      );
      if (!user) {
        return res.status(404).send("User Not Found");
      }

      console.log(user);

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      console.log(req.params.body, "---------------------");

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      await User.findOneAndUpdate(
        { userName: thought.userName },
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true }
      );
      res.json({ message: "thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $addToSet: { friends: req.params.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "Reaction Not Created" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove assignment from a student
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.params.reactionId } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No Reaction found with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};


