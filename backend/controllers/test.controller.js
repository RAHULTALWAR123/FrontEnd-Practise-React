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