const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true, 
        minlength: 1,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
          //use a getter method to format the timestamp on query
        get: (time) => {
          return new Date(time).toLocaleDateString();
        }
      },
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false
    }
  );

  module.exports = reactionSchema;