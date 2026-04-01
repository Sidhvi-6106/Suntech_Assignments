function ContactUs() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12'>
      <p className='text-sm font-semibold uppercase tracking-[0.3em] text-sky-600'>Contact</p>
      <h2 className='mt-4 text-3xl font-bold text-slate-950'>Let&apos;s stay connected</h2>
      <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600'>
        For support, feedback, or product questions, reach out at
        {' '}
        <a className='font-semibold text-sky-700 hover:text-sky-900' href='mailto:support@example.com'>
          support@example.com
        </a>
        .
      </p>
    </section>
  );
}

export default ContactUs;
