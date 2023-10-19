// probably finished?

const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create Student model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      // match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Not Valid!"],
      validate: {
        validator: function(v) {
          return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(v);
        }, message: props => `${props.value } is not valid`
      }
    },
    
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // self refrance user ids??
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
