
import connectMongoDB from "@/utils/mongodb.js";
import Post from "@/models/posts.js";
import { NextResponse } from "next/server";


export async function PUT(request){
    try {
        const { title, desc, content,id } = await request.json();
        await connectMongoDB();
        await Post.findByIdAndUpdate(id, { title, desc, content });
        return NextResponse.json({  message: "Post updated successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.error({ err });
    }
}

export async function POST(request) {
    try {
        const { title, desc, content, user } = await request.json();
        await connectMongoDB();
        await Post.create({ title, desc, content, user});
        return NextResponse.json({ message: "Post created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.error({ error });
    }
}

export async function GET(request) {
    try {
        await connectMongoDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.error({ error });
    }
}

export async function DELETE(request){
    try {
        const { id } = await request.json();
        await connectMongoDB();
        await Post.findByIdAndDelete(id);
        return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.error({ error });
    }
}
