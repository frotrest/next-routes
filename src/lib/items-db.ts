export interface Item {
    id: string;
    title: string;
    category: string;
    price: number;
    [x:string]: any;
}

export const itemsDB: Item[] = [
    { id: '1', title: 'Next.js Повний курс', category: 'courses', price: 1200 },
    { id: '2', title: 'React для початківців', category: 'courses', price: 800 },
    { id: '3', title: 'Tailwind CSS Майстер', category: 'books', price: 450 },
    { id: '4', title: 'TypeScript у деталях', category: 'books', price: 600 },
    { id: '5', title: 'Node.js Backend Практикум', category: 'courses', price: 1500 },
];