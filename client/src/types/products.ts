interface Product  {
    id: number,
    imgUrl: string,
    category: string,
    badge: string,
    title: string,
    price: number,
    description?: string,
    specs?: Record<string, string | undefined>;
}


export type { Product };