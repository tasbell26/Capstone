/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
// importing mongoose

const parkSchema = new mongoose.Schema({
  park: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const Parks = mongoose.model("Parks", parkSchema);

module.exports = {
  schema: parkSchema,
  model: Parks,
};
