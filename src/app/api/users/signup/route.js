
import connectMongoDB from "@/utils/mongodb.js";
import User from "@/models/users.js";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";


await connectMongoDB();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log(reqBody);

        // check if the user already exists
        const userExists = await User.findOne({email});

        if (userExists) {
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        await newUser.save();

        console.log(newUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser
        }, {status: 200});

    } catch (error) {
        // Handle the error here
        return NextResponse.json({error: error.message}, {status: 500});
    }

}