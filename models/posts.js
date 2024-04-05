import mongoose,{ Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Reference to the User model
        required: true
    }
},{
        timestamps: true,
});

const Post = mongoose.models.post || mongoose.model("post", postSchema);

export default Post;