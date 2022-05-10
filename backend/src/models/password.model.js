const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema(
    {
        password: {type: String, required: true},
        placeholder:{type: String},
        label: {type: String},
        value:{type: String}        
    },
    {
      versionKey: false,
      timestamps: true,
    }
)


module.exports = mongoose.model("password", passwordSchema);