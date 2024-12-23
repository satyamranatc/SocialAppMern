import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
 
    FullName:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avtar:{
        type: String,
        default: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
    }
});

let User = mongoose.model("User", UserSchema);
export default User;