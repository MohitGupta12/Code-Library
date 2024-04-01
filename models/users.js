import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    Username: {
        type: String,
        required: [true, "Please provide a Username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        enum: ["user", "admin","creator"],
        default: "user",
    },
},{
    timestamps: true,
})

const User = mongoose.models.Users || mongoose.model("User", UserSchema);

export default User;