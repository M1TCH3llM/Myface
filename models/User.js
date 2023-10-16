// probably finished?

const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userName: {
      type: String,
      unique: true, 
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      validate: {
        validator: function(v) {
          return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(v);
        }, message: props => `${props.value } is not valid`
      }
    },
    // grab user thoughts by id??
    friends: [{
      type: Schema.ObjectId,
      ref: 'User'
    }],
    // self refrance user ids??
    friends: [thoughtsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', userSchema);

module.exports = User;
