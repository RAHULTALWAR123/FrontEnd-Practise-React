import User from "../models/user.model.js";


export const protectRole = async(req,res,next) => {
    try{

        const id = req.user._id;
        
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message : "user not found"});
        }
        if(user.role != "professor"){
            return res.status(403).json({message : "cant access professor"});
        }
        else{
            return next();
        }
    }
    catch(err){
        console.log(err.message);
    }
}