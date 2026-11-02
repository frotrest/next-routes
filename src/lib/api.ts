
export interface DimensionsI {
    width: number;
    height: number;
    depth: number;
}

export interface ReviewI {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface MetaI {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export interface ProductI {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: DimensionsI;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ReviewI[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaI;
    images: string[];
    thumbnail: string;
}

export async function getProducts(): Promise<ProductI[]> {
    try {
        const request = await fetch("https://dummyjson.com/products?limit=8", {
            next: { revalidate: 60 }
        })
        if (!request.ok) {
            throw new Error(`Failed to fetch products: ${request.status}`);
        }
        const response = await request.json();
        return response.products;
    } catch (error) {
        console.log(error instanceof Error ? error.message : error);
        return []
    }
}

export async function getProductById(id: number | string): Promise<ProductI | null> {
    try {
        const request = await fetch(`https://dummyjson.com/products/${id}`, {
            cache: "no-store"
        })
        if (!request.ok) {
            throw new Error(`Failed to fetch products: ${request.status}`);
        }
        return request.json();
    } catch (error) {
        console.log(error instanceof Error ? error.message : error)
        return null
    }

}

export async function getProductReviews(id: number | string): Promise<ReviewI[]> {
    try {
        const request = await fetch(
            `https://dummyjson.com/products/${id}?select=reviews`,
            { next: { revalidate: 60 } }
        );
        if (!request.ok) {
            throw new Error(`Failed to fetch reviews for ${id}: ${request.status}`);
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await request.json();
        return response.reviews;
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
        return [];
    }
}