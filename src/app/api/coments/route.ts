import { NextRequest, NextResponse } from 'next/server';

const comments = [{ id: '1', text: 'Перший коментар' }];

export async function GET() {
    return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!body.text) {
        return NextResponse.json({ error: 'Текст обов’язковий' }, { status: 400 });
    }

    const newComment = { id: Date.now().toString(), text: body.text };
    comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
}