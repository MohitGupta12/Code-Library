
import connectMongoDB from "@/utils/mongodb.js";
import Lib from "@/models/library.js";
import { NextResponse } from "next/server";


// export async function PUT(request){
//     try {
//         const { name, lib_id } = await request.json();
//         await connectMongoDB();
//         await Lib.findByIdAndUpdate(lib_id, { name});
//         return NextResponse.json({  message: "Library updated successfully" }, { status: 200 });
//     } catch (err) {
//         return NextResponse.error({ err });
//     }
// }

export async function POST(request) {
    try {
        const { name, user } = await request.json();
        console.log(name, user_id);
        await connectMongoDB();
        await Lib.create({ name, user});
        return NextResponse.json({ message: "Library created successfully" }, { status: 201 }); // Move status code to options
    } catch (error) {
        return NextResponse.error({ error: error.message}, { status: 500 }); // Move status code to options
    }
}

export async function GET(request) {
    try {
        await connectMongoDB();
        const libs = await Lib.find();
        return NextResponse.json(libs);
    } catch (error) {
        return NextResponse.error({ error });
    }
}

// export async function DELETE(request){
//     try {
//         const { id } = await request.json();
//         await connectMongoDB();
//         await Lib.findByIdAndDelete(id);
//         return NextResponse.json({ message: "Library deleted successfully" }, { status: 200 });
//     } catch (error) {
//         return NextResponse.error({ error });
//     }
// }
