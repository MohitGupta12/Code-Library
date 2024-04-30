// make a model for library that have lib_id name cover date and user_id(ref to user)
import mongoose, { Schema } from "mongoose";

const libSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
        },
        // cover: {
        //     type: String,
        //     required: [true, "Please provide a cover"],
        // },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: [true, "Please provide a user_id"],
        }
    },
    {
        timestamps: true,
    }
)

const Lib = mongoose.models.lib || mongoose.model("lib", libSchema);

export default Lib;