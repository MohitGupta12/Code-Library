
import connectMongoDB from "@/utils/mongodb.js";
import Post from "@/models/posts.js";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { title, content } = await request.json();
    await connectMongoDB();
    await Post.create({ title, content });
    return NextResponse.json({ message: "Post created successfully" }, { status: 201 });
}

export async function GET(request) {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
}

export async function DELETE(request){
    const id  = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}
