import { Link } from 'react-router';

function Home() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12'>
      <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-600'>
        Welcome
      </p>
      <h2 className='mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-950'>
        Browse products with a React app that is ready for local use and static deployment.
      </h2>
      <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600'>
        This project now boots correctly, uses deployment-safe routing, and shows clear loading and
        error states while fetching products.
      </p>
      <div className='mt-8 flex flex-wrap gap-4'>
        <Link
          to='/products'
          className='rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
        >
          View products
        </Link>
        <Link
          to='/contact'
          className='rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50'
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}

export default Home;
