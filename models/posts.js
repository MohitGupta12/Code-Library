import mongoose,{ Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
},{
        timestamps: true,
});

const Post = mongoose.models.post || mongoose.model("post", postSchema);

export default Post;