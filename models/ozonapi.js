import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

    id :{ 
        type:String,
        require:true
    },

    apikey :{ 
        type:String,
        require:true
    },
    
    user: { // ← هذا هو المرجع الجديد
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // ← اسم الموديل المرتبط
        required: true
    }

}, { timestamps: true });

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
