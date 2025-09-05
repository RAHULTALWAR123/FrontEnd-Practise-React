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