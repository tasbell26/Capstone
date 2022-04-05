const mongoose = require("mongoose");
// importing mongoose

const parkSchema = new mongoose.Schema({
  parks: {
    type: String,
    required: true,
  },
});

const parks = mongoose.model("Goexploring", parkSchema);

module.exports = {
  schema: parkSchema,
  model: parks,
};
