import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,         
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['student','professor'],
        default: 'student'
    },
    slots :[
        {
            date : {
                type: Date
            },
            isBooked : {
                type: Boolean, 
                default: false
             }
        }
    ],
    appointments : [
        {
            date : {
                type: Date
            },
            professorId : {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'User'
            },
            status : {
                type: String,
                enum: ['booked', 'cancelled'],
                default: 'booked'
            }
        }
    ]

})

const User = mongoose.model("User", userSchema);

export default User; 