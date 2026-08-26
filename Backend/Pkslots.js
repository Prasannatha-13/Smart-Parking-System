const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Smart-Parking-System")

const parkingSlotSchema = new mongoose.Schema({
    slotNumber: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: Number,
        enum: [0,1],
        default: 1
    },

    floor: {
        type: String
    },

    location: {
        type: String
    }
});
module.exports=mongoose.model("Pkslots",parkingSlotSchema)