import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';

const getDataFromToken = async (request) => {
    try {
        const token = request.cookies.get('token')?.value || "";
        // console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // log(decodedToken);
        return decodedToken.id;
    } catch (error) {
        console.log(error.message);
    }
}

export default getDataFromToken;