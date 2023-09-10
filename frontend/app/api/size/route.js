import client from "@/src/sanity/client";
import { NextResponse } from "next/server";

export async function GET(request,) {

    const { searchParams } = new URL(request.url);

    let response = [];
    try {
        response = await client.fetch(`*[_type == "size"]`);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
}