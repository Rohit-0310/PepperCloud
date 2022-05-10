const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
    {
        email: {type: String, required: true },
        name: {type: String},
        placeholder:{type: String},
        label: {type: String},
        value:{type: String},
        
    },
    {
      versionKey: false,
      timestamps: true,
    }
)


module.exports = mongoose.model("email", emailSchema);