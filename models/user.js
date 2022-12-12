const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({

   name :{
       type: String
   },
   email :{
       type : String,
       required : true,
       unique: true
   },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "ROLE_MEMBER",
    enum: ["ROLE_ADMIN", "ROLE_MEMBER"]
  },

},

{timestamps: true }

)

module.exports = mongoose.model('User', UserSchema);