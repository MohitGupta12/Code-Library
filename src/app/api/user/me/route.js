import getDataFromToken from '@/utils/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB  from '@/utils/mongodb';
import User from '@/models/users';

await connectMongoDB();
export async function GET (request) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findById(userId).select("-password") ;
        // console.log(user);
        return NextResponse.json({
            message: "User found",
            user:user
        });
    } catch (error) {
        return NextResponse.error({ error });
    }
}
