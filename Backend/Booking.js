const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Smart-Parking-System")

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    slot: {
        type: String,
        required: true
    },

    vehicleNo: {
        type: String,
        required: true
    },

    mobileNo: {
        type: String,
        required: true
    },

    bookingDate: {
        type: Date,
        default:Date.now
    },

    startTime: {
        type: Date,
        required: true
    },

    endTime: {
        type: Date,
        required: true
    },
    status:{
        type:String,
        enum:["active","completed","cancelled"],
        default:"active"
    }
   
});

module.exports=mongoose.model("Bookings",bookingSchema)