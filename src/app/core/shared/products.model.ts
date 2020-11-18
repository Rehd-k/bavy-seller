export interface Products {
    _id: string;
    subtitle: string;
    category: string;
    for: string;
    title: string;
    Description: string;
    Features: string[];
    Specification: string[];
    price: number;
    DiscountPrice: number;
    size: string[];
    color: string[];
    weight: string;
    Lenght: string;
    mainMaterial: string;
    stockLevel: string;
    images: string[];
    tags: string[];
    reviews: object[];
    createdOn: string;
    verified: string;
}
