const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const freemiumToolSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  simspy: { 
    type: Number, 
    default: 5
  },
  callspy: { 
    type: Number, 
    default: 5
  },
  mail2linkedin: { 
    type: Number, 
    default: 5
  },
  linkedin2mail: { 
    type: Number, 
    default: 5
  },
  xscan: { 
    type: Number, 
    default: 5
  },
  socialmediafinder: { 
    type: Number, 
    default: 5
  },
});


const FreemiumTool = mongoose.model("FreemiumTool", freemiumToolSchema);
module.exports = FreemiumTool;