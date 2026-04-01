import { useEffect, useState } from 'react';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function getProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        });

        if (res.status === 200) {
          const products = await res.json();
          setProducts(products);
        } else {
          throw new Error('Failed to fetch products. Please try again later.');
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    getProducts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className='py-16 text-center text-2xl font-semibold text-sky-600'>Loading...</p>;
  }

  if (error) {
    return <p className='py-16 text-center text-xl font-semibold text-red-600'>{error.message}</p>;
  }

  if (products.length === 0) {
    return <p className='py-16 text-center text-xl text-slate-600'>No products available.</p>;
  }

  return (
    <section>
      <div className='mb-8'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-600'>Catalog</p>
        <h2 className='mt-3 text-3xl font-bold text-slate-950'>Featured products</h2>
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
      {products.map((productObj) => (
        <article
          key={productObj.id}
          className='rounded-3xl bg-white p-6 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg'
        >
          <img
            src={productObj.image}
            className='mb-6 h-52 w-full object-contain'
            alt={productObj.title}
          />
          <p className='text-xs font-semibold uppercase tracking-[0.25em] text-sky-600'>
            {productObj.category}
          </p>
          <h3 className='mt-3 line-clamp-2 text-lg font-bold text-slate-900'>
            {productObj.title}
          </h3>
          <p className='mt-3 line-clamp-3 text-sm leading-6 text-slate-600'>
            {productObj.description}
          </p>
          <p className='mt-5 text-xl font-bold text-slate-950'>${productObj.price}</p>
        </article>
      ))}
      </div>
    </section>
  );
}

export default ProductsList;
