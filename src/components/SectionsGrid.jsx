import { User, BookOpen, Upload, ArrowRight } from "lucide-react";

export default function SectionsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-yellow-100">Jump in</h2>
          <p className="mt-1 text-sm text-yellow-100/70">
            Create an account, dive into fiction picks, or upload PDFs to earn.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Auth card */}
        <a
          id="auth"
          href="#auth"
          className="group relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(234,179,8,0.4)]"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-300 ring-1 ring-yellow-500/30">
              <User className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-yellow-100">Create account & sign in</h3>
          </div>
          <p className="mt-3 text-sm text-yellow-100/70">
            Unlock posting, likes, saves, and editing your reflections.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300">
            Get started
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-2xl" />
        </a>

        {/* Fiction card */}
        <div id="fiction" className="rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-300 ring-1 ring-yellow-500/30">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-yellow-100">Fiction picks</h3>
          </div>
          <p className="text-sm text-yellow-100/70">
            Discover reflections from popular fiction reads.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              "https://images.unsplash.com/photo-1542089363-5c92d2371e9f?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Fiction"
                className="h-24 w-full rounded-md object-cover ring-1 ring-yellow-500/20"
              />
            ))}
          </div>
        </div>

        {/* Upload card */}
        <a
          id="upload"
          href="#upload"
          className="group relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(234,179,8,0.4)]"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-300 ring-1 ring-yellow-500/30">
              <Upload className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-yellow-100">Upload PDFs & earn</h3>
          </div>
          <p className="mt-3 text-sm text-yellow-100/70">
            Share study guides or reading notes as PDFs and earn rewards.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300">
            Learn more
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-2xl" />
        </a>
      </div>
    </section>
  );
}
