const { Thought, User } = require("../models");

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
  // Create a thought
  // async createThought(req, res) {
  //   try {
  //     const thought = await Thought.create(
  //       { _id: req.params.userId },
  //       { $addToSet: { thoughts: req.body } },
  //       console.log(req.body)
  //       // { runValidators: true, new: true }
  //     );
  //     res.json(thought);
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json(err);
  //   }
  // },

  async createThought(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        userName: req.body.userName,
      });

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: thought } },
        { new: true }
      );

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.courseId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No course with that ID" });
      }

      await User.deleteMany({ _id: { $in: thought.user } });
      res.json({ message: "Course and students deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await User.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No course with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
