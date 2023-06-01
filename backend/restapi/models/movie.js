const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    release_date:{ type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);