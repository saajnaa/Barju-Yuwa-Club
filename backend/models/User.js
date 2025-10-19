import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name: {

        type: String,
        require: true
    },

    position: {

        type: String,
        require: true

    },

    mobileNo: {
        type: String,
        require: true

    },

    email: {

        type: String,
        require: true

    }



})

export const User = mongoose.model('user', UserSchema);