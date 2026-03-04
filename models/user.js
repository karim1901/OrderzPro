import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Invalid email format"
        ]
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

    verificationToken: {
        type:String
    },

    verificationTokenExpires:{
        type:Date
    } ,

    isVerified: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
