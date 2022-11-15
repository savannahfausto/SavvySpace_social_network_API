const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
        //use a getter method to format the timestamp on query
      get: (time) => {
        return new Date(time).toLocaleDateString();
      }
    },
    username: //referencing the user that created this thought
    {
      type: String,
      required: true, 
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtual:true,
      getters: true,
    },
  }
);

thoughtSchema
  .virtual('reactionCount')
  // retrieves the length of the thought's reactions array field on query
  .get(function () {

    return this.reactions.length;
  })
  

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
