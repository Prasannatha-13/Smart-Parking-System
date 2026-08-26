const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Smart-Parking-System")

const userschema= new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required:false
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  },
  googleId: {
  type: String,
  },
  profilePic:{
    type:String,
    default:""
  },
  vehicleNo: String,
  vehicleType: String,
  // vehicleNo:{
  //   type:String,
  //   required:true
  // },
  // Slotposition:{
  //   type:String,
  //   required:true
  // },
  about:{
    type:String,
   default:""
  },
 
})
module.exports=mongoose.model("User",userschema)