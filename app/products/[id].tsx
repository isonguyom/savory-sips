// /pages/products/[id].tsx
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

interface ProductPageProps {
  id: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ id }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>This is a static page for product with ID: {id}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Define a list of product IDs to pre-render
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  
  return {
    props: {
      id,
    },
  };
};

export default ProductPage;
