const express=require('express');
const cors=require('cors');
const User=require('./Users.js');
const Pkslots=require("./Pkslots.js")
const Book=require("./Booking.js")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken");
const protect=require("./protect.js")
const app=express();

app.use(cors({
  origin: "*"
}));

require("dotenv").config();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");
})

app.post('/create',async (req,res)=>{
     
    try{
        const {username,email,password}=req.body;

        const Exists= await User.findOne({email})

        if(Exists){
            return res.status(400).json({msg:"User already exists"})
        }

        const hashedpw=await bcrypt.hash(password,10);

        const created=await User.create({
            username,
            email,
            password:hashedpw
        })
        console.log(created)
        res.json({msg:"Signed in"});
    }catch(err){
         console.error(err);
    }

})

app.post('/login',async(req,res)=>{
     
    try{
       const {email,password}=req.body;

       let user=await User.findOne({email})

       if(!user){
        return res.status(400).json({msg:"User not found"})
       }

       const isMatch=await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.status(400).json({msg:"Invalid password"})
       }
       console.log("logged in")
       
    //JWT authentication jwt token creation
       const token=jwt.sign(
        {
            userId:user._id,
            role:user.role
        },
        process.env.JWT_SECRET,
        { expiresIn:"1d"}
      );

      res.status(200).json({
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
})

const slot1 = async () => {
  await Pkslots.create({
    slotNumber: "A1",
    status: 1
  });
};

const slot2 = async () => {
  await Pkslots.create({
    slotNumber: "A2",
    status: 0
  });
};

const slot3 = async () => {
  await Pkslots.create({
    slotNumber: "A3",
    status: 1
  });
};

const slot4 = async () => {
  await Pkslots.create({
    slotNumber: "A4",
    status: 1
  });
};

const slot5 = async () => {
  await Pkslots.create({
    slotNumber: "A5",
    status: 1
  });
};
const slot6 = async () => {
  await Pkslots.create({
    slotNumber: "A6",
    status: 1
  });
};
// slot6();
// slot5();
// slot1();
// slot2();
// slot3();
// slot4();

app.get("/parking-status",async (req,res)=>{
    try{
        const total=await Pkslots.countDocuments();
        const available=await Pkslots.countDocuments({status:1})
        const occupied=total-available;

        const slots=await Pkslots.find();


        res.json({
            total,
            available,
            occupied,
            slots
        })
    }catch(err){
       console.error(err);
        res.status(500).json({
      message: "Error fetching parking status"
    });
    }
})
app.post("/book",protect,async(req,res)=>{
  try{
    const {slot,vehicleN,mobileN,startT,endT}=req.body

   const booking=await Book.create({
      userId:req.user.userId,
      slot:slot,
      vehicleNo:vehicleN,
      mobileNo:mobileN,
      startTime:startT,
      endTime:endT,
      status:"active"
    })

    await Pkslots.findOneAndUpdate(
      {slotNumber:slot},
      {status:0},
      {returnDocument:'after'}
    )
    console.log("booked");
    res.status(201).json({
      message:"Booking successful",
      booking
    })
  }catch(err){
    console.error(err);
    res.status(500).json({
      message: "Booking failed"
    });
  }
})


app.listen(5000,()=>{
    console.log("your server is running")
})
