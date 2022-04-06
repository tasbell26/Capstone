const mongoose = require("mongoose");
// importing mongoose

const parkSchema = new mongoose.Schema({
  parks: {
    type: String,
    required: true,
  },
});

const Parks = mongoose.model("Parks", parkSchema);

module.exports = {
  schema: parkSchema,
  model: Parks,
};
