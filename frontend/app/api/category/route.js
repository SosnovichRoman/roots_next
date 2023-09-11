import client from "@/src/sanity/client";
import { categoryAllQuery } from "@/src/sanity/data";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    let response = [];
    try {
        response = await client.fetch(categoryAllQuery);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
}