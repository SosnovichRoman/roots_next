import client from "@/src/sanity/client";
import { NextResponse } from "next/server";

export async function GET(request, context) {

    const id = context.params.id;

    let response = [];
    try {
        response = await client.fetch(`*[_type == "product" ${id ? `&& _id == "${id}"` : ''}][0]
            {..., category->, size->, "image": mainImage.asset->url, "images": images[].asset->url}`);

    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
}

export async function POST(request){
    return new NextResponse('', {status: 200})
}