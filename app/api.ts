const API_URL = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=6979ecdb537c499cad45c76aa1e029d9&reverse_sort=false&page=1&size=10&Appid=T1VYRJJ6BZH9OLP&Apikey=d77d156f299b4506bc95ebc9f29d5e9920240712225902155299';

const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const searchProducts = async (query: string) => {
  const response = await fetch(`${API_URL}&search=${query}`);
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return response.json();
};

export { fetchProducts, searchProducts };
