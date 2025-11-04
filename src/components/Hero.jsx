export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24 lg:px-8">
        <div>
          <span className="mb-4 inline-block rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium tracking-wide text-yellow-300">
            Read. Reflect. Share.
          </span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-yellow-100 sm:text-5xl">
            Turn every book into a spark for others
          </h1>
          <p className="mt-4 max-w-xl text-yellow-100/70">
            Post short reflections with a title, the book you read, 1–3
            concise paragraphs, and helpful tags. Browse what others are
            learning in a vibrant, reader-first feed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#auth" className="rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow transition hover:bg-yellow-300">
              Start reflecting
            </a>
            <a href="#feed" className="rounded-md border border-yellow-500/40 px-5 py-3 text-sm font-semibold text-yellow-200 transition hover:bg-yellow-500/10">
              Explore feed
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
              alt="Open book"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
              alt="Library"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
            <img
              src="https://images.unsplash.com/photo-1526312426976-593c2f0b8adb?q=80&w=1200&auto=format&fit=crop"
              alt="Notes and coffee"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop"
              alt="Fiction shelf"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop"
              alt="Book stack"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              alt="Reading corner"
              className="h-40 w-full rounded-lg object-cover ring-1 ring-yellow-500/20 sm:h-56"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
