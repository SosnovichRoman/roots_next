import client from "@/src/sanity/client";
import { NextResponse } from "next/server";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const sizeId = searchParams.get('sizeId');
    const order = searchParams.get('order');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    let response = [];
    try {
        response = await client.fetch(`*[_type == "product"
            ${categoryId ? `&& category._ref == "${categoryId}"` : ''}
            ${sizeId ? `&& size._ref == "${sizeId}"` : ''}
            ${minPrice ? `&& price >= ${minPrice}` : ''}
            ${maxPrice ? `&& price <= ${maxPrice}` : ''}]
            ${order ? order : ''}
            {..., category->, "image": mainImage.asset->url}`);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }

    return new NextResponse(JSON.stringify(response), { status: 200 })
}