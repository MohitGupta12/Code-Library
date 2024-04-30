import connectMongoDB from "@/utils/mongodb.js";
import User from "@/models/users.js";
import { NextResponse } from "next/server";

export async function GET(request , {params}){
    try {
        const { username } = params;
        await connectMongoDB();
        const user = await User.findOne({username: username});
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.error({ error });
    }
}