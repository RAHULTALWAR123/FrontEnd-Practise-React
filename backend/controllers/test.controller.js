import { json } from "express";
import { generateTokenAndSetCookie } from "../cookie/cookie.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async(req,res) => {
    try{

        const {name,email,password,role} = req.body;
        
        if(!name || !email || !password || !role){
            return res.status(400).json({message : "plz fill all fields"});
        }
        
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message : "user already exists"});
        }
    
        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
    
        const newUser = await User.create({
        name,
        email,
        password : hashedPassword,
        role
    })

    if(newUser){
        generateTokenAndSetCookie(newUser._id,res);
    }
    
    return res.status(201).json({newUser});
}
catch(err){
    console.log(err.message);
     res.status(500).json({error : err.message})
}

}

export const login = async(req,res) => {
    try{

        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({message : "plz add all fields"});
        }
        
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message : "user not found"});
        }

        const isMatch = await bcrypt.compare(password,user?.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        generateTokenAndSetCookie(user._id,res);
        
        return res.status(200).json({user});
    }

    catch(err){
        console.log(err.message);
        res.status(500).json({error : err.message}); 
    }
}


export const logout = async(req,res) => {
    try {
        res.cookie("jwt","",{maxAge : 1})
        res.status(200).json({message : "logout succesful"});
    } catch (error) {
        console.log(err.message);
        res.status(500).json({error : err.message}); 
    }

}

export const PostSlots = async(req,res) => {
    try{

        const {dates} = req.body;
        
        if(dates.length === 0){
            return res.status(400).json({message:"dates not found"});
        }
        
        const user = await User.findById(req.user._id);
    if(!user){
        return res.status(400).json({message : "user not found"});
    }

    dates.forEach((d) =>(
        user.slots.push({date : d})
    ))
    
    await user.save();
    
    return res.status(201).json({user});
}
catch(err){
    console.log(err.message);
}
}

export const getSlots = async(req,res) =>{
    try{
        const {id} = req.params;
        const prof = await User.findById(id);
        if(!prof){
            return res.status(400).json({message : "prof not found"});
        }
        
        if(prof.role != "professor"){
            return res.status(400).json({message : "user is not professor"});
        }
        
        return res.status(200).json(prof.slots);
    }
    catch(err){
        console.log({message : err.message});
    }
}

export const BookSlot = async(req,res) => {
    try {
        const {profid,slotid} = req.params;

        const professor = await User.findById(profid);
        if(!professor){
            return res.status(404).json({message : "prof not found"});
        }

        if(professor.role != "professor"){
            return res.status(400).json({message : "invalid professor"});
        }

        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({message : "user not found"});
        }

        if(user._id.toString() === professor._id.toString()){
            return res.status(400).json({message :"cant book with urself"});  
        }

        const SelectedSlot = professor.slots.find((s) => (s._id.toString() == slotid))

          if (!SelectedSlot) {
      return res.status(404).json({ message: "slot not found" });
    }

    if (SelectedSlot.isBooked) {
      return res.status(400).json({ message: "slot already booked" });
    }


        SelectedSlot.isBooked = true;
        await professor.save();


        user.appointments.push({
            date : SelectedSlot.date,
            professorId : professor._id,
        })

        await user.save();

        return res.status(200).json({
            message: "Slot booked successfully",
            appointment: {
                date: SelectedSlot.date,
                professor: professor.name,
            },
        });

    } catch (error) {
        console.log(error.message);
    }
}

// export const CancelAppointment = async(req,res) => {
//     try {
//         const {appid} = req.params;
        
//         const professor = await User.findById(req.user._id);
//         if(!professor){
//             return res.status(404).json({message : "professor not found"});
//         }

//         const users = await User.find({role : 'student'});
//         if(users.length === 0){
//             return res.status(404).json({message : "no students available"})
//         }

//         const appointment = users.map((u) => u.appointments.find((app) => app._id.toString() === appid));

//         if(!appointment){
//             return res.status(404).json({message :"appointment not found"});
//         }

//         appointment.status = "cancelled";


//     } catch (error) {
//         console.log(error.message);
//     }
// }