import { itemsDB, Item } from "@/lib/items-db";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    return NextResponse.json({ data: itemsDB, total: itemsDB.length })
}

export async function POST(request: NextRequest) {
    try {
        // Витягнути body 
        const body = await request.json();
        // Перевірка обов'язкових полів
        if (!body.title || !body.price) {
            return NextResponse.json({ error: "title and price are required" }, { status: 400 })
        }
        // Створення нового айтема
        const newItem: Item = {
            id: Date.now().toString(16),
            title: body.title,
            price: Number(body.price),
            category: body.category || "general"
        }
        // Додавання айтема в базу даних
        itemsDB.push(newItem);
        // Завершення та відповідь клієнту
        return NextResponse.json({ data: newItem }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: "not valid json format" }, { status: 400 })
    }
}