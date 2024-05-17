import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        email:{
            type: String,
            required: [true, 'email is required'],
        },
        password:{
            type: String,
            required: [true, 'password is required'],
        },
        roles:{
            type: String,
            default: ['USER_ROLE'],
        },
        img:{
            type: String,
        },

    });

export const UserModel = mongoose.model('Category', userSchema);
