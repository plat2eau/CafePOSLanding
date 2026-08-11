export default function Home() {
  return (
    <main className="min-h-screen bg-warm text-charcoal">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-center px-6 py-20 sm:px-8 lg:px-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          OrderDesk
        </p>
        <h1 className="max-w-3xl font-heading text-5xl font-bold leading-tight text-navy sm:text-6xl">
          Run Your Cafe. Simple, Fast & Easy.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          A clean starting point for the OrderDesk landing website. The next
          milestone will turn this shell into the shared design system.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-orange px-5 py-3 text-sm font-bold text-navy transition hover:bg-[#ea650b] focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-warm"
            href="#demo"
          >
            Request a Free Demo
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-warm"
            href="#how-it-works"
          >
            See How It Works
          </a>
        </div>
      </section>
    </main>
  );
}
