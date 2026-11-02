import { itemsDB } from "@/lib/items-db";
import { NextResponse, NextRequest } from "next/server";

// /api/search?q=react&category=courses

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q")?.toLowerCase() || "";
    const category = searchParams.get("category")?.toLowerCase() || "";

    let products = itemsDB;
    if (query) {
        products = products.filter((item) => item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query));
    }
    if (category) {
        products = products.filter((item) => item.category.toLowerCase() === category)
    }
    return NextResponse.json({ query, category, data: products, total: products.length });
}