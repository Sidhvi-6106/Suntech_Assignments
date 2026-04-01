import { useEffect, useState } from 'react';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (res.status === 200) {
          let products = await res.json();
          setProducts(products);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) {
    return <p className='text-center text-2xl text-blue-500'>Loading...</p>;
  }
  if (error) {
    return <p className='text-center text-2xl text-red-600'>{error.message}</p>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
      {products.map((productObj) => (
        <div key={productObj.id} className='shadow-md p-10 rounded-2xl'>
          <img
            src={productObj.image}
            className='h-44 object-contain block mx-auto mb-10'
            alt={productObj.title}
          />
          <p>{productObj.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;