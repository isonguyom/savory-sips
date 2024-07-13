export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const API_BASE_URL = 'https://api.timbu.cloud/products'; // Replace with the actual base URL
const API_KEY = 'd77d156f299b4506bc95ebc9f29d5e9920240712225902155299'; // Replace with your actual API key
const APP_ID = 'T1VYRJJ6BZH9OLP'; // Replace with your actual APP ID
const ORGANIZATION_ID = '6979ecdb537c499cad45c76aa1e029d9'; // Replace with your actual organization ID

export const fetchProducts = async (page: number, size: number): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${page}&size=${size}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const searchProducts = async (query: string, page: number, size: number): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}?search=${query}&organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${page}&size=${size}&APP_ID=${APP_ID}&API_KEY=${API_KEY}`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return response.json();
};
