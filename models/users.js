import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
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
        enum: ["user", "admin"],
        default: "user",
    },
},{
    timestamps: true,
})

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;