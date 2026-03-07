import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

    id :{ 
        type:String,
        required: true
    },

    apikey :{ 
        type:String,
        required: true
    },
    
    user: { // ← هذا هو المرجع الجديد
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // ← اسم الموديل المرتبط
        required: true
    }

}, { timestamps: true });

const OzonApi = mongoose.models.OzonApi || mongoose.model("OzonApi", userSchema);

export default OzonApi;
