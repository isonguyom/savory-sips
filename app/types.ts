export interface Product {
    name: string;
    description: string;
    id: string;
    product_image: string[];
    selling_price: null;
    quantity: number
  }
  
  export interface ApiResponse {
    page: number;
    size: number;
    total: number;
    items: Product[];
    previous_page: string | null;
    next_page: string | null;
  }
  