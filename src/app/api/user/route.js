// endpoint for updating user profile {put}, Read-1 and Read-all

import connectMongoDB from "@/utils/mongodb.js";
import User from "@/models/users.js";
import { NextResponse } from "next/server";

export async function PUT(request){
    try {
        const { username, email, id } = await request.json();
        await connectMongoDB();
        await User.findByIdAndUpdate(id, { username,email });
        return NextResponse.json({  message: "User updated successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.error({ err });
    }
}

export async function GET(request){
    try {
        await connectMongoDB();
        const users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json(error);
    }
}

