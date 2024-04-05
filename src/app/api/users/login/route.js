
import connectMongoDB  from "@/utils/mongodb.js";
import User from "@/models/users.js";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



export async function POST(request ) {
await connectMongoDB();

    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        // check if the user already exists
        const user = await User.findOne({email});
        if (!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400});
        }
        // check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({error: "Invalid password"}, {status: 400});
        }
        console.log("verified user");
        // creating token data
        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        // create and assign a token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "1d"});

        console.log("JWT token created");
        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
        });

        console.log(response, "response created");

        response.cookies.set("token", token, {httpOnly: true,});
        response.cookies.set("isLoggedIn", true);

        return response;
    } catch (err) {
        return NextResponse.json({error: err.message}, {status: 500});
    }
}
