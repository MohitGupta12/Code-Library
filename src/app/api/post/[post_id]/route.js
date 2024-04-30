
import connectMongoDB from "@/utils/mongodb.js";
import Post from "@/models/posts.js";
import { NextResponse } from "next/server";

export async function GET(request , {params}){
    try {
        const { post_id } = params;
        await connectMongoDB();
        const post = await Post.findOne({_id: post_id});
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.error({ error });
    }
}