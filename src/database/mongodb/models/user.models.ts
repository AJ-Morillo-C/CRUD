import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required: [true, 'id is required'],
        },
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

        role:{
            type: String,
            required: [true, 'role is required'],
        },

        img:{
            type: String,
            required: [true, 'image is required'],

        }

    });

export const UserModel = mongoose.model('User', userSchema);
