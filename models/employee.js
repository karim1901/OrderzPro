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
    password: {
        type: String,
        required: true,
        trim: true
    },

    commission:{
        type:Number,
        required:true
    }
    ,

    idOrder: {
        type: String,
        default: "10000",
        required: true
    },

    isActive: {
        type: Boolean,
        default: true,
        required: true

    }
    ,
    gender: {
        type: String,
        default: "fimale",
        required: true

    },

    isPay: {
        type: Boolean,
        default: false,
        required: true

    }
    ,

    apikey: { // ← هذا هو المرجع الجديد
        type: mongoose.Schema.Types.ObjectId,
        ref: "OzonApi", // ← اسم الموديل المرتبط
        required: true
    },

    user: { // ← هذا هو المرجع الجديد
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", // ← اسم الموديل المرتبط
        required: true
    }




}, { timestamps: true });

const Employee = mongoose.models.employee || mongoose.model("employee", userSchema);

export default Employee;
