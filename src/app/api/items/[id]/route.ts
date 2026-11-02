import { itemsDB } from "@/lib/items-db";
import { NextResponse, NextRequest } from "next/server";

// DELETE /api/items/[id]

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = itemsDB.findIndex((item) => item.id === id);
    if (product === -1) {
        return NextResponse.json({ error: "not found" }, { status: 404 })
    }
    itemsDB.splice(product, 1);

    return NextResponse.json({ message: "delete was succeed", id }, { status: 204 })
}

// Зробити гет
// GET /api/items/[id]

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const item = itemsDB.find((item) => item.id === id);

        if (!item) {
            return NextResponse.json({ message: `id -${id} hasn't found` }, { status: 400 })
        }

        return NextResponse.json({ id, name: `Товар з Id-${id}`, data: item }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "not valid json format" }, { status: 400 })
    }

}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();


        const itemBody = itemsDB.find((el) => el.id === id);

        if (!itemBody) {
            return NextResponse.json({ message: "id hasn't found" }, { status: 400 })
        }

        Object.keys(body).forEach((key) => {
            itemBody[key] = body[key];
        });


        return NextResponse.json({ message: `user with ${id} has been updated`, data: itemBody }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "not valid json format" }, { status: 400 })
    }

}