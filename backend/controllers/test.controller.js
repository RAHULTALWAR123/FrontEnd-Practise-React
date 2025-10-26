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

export const paginate = async(req,res) => {
    try {
        // const {page,limit} = req.query;
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const skip = (page -1)* limit;

        const users = await User.find().skip(skip).limit(limit)

        return res.json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error : error.message});
    }
}

export const getSearchUsers = async(req,res) => {
    try {
        const {name} = req.query;

        const users = await User.find({name : {$regex : name,$options : "i"}}).limit(10);

        return res.json(users);
    } catch (error) {
        
    }
}