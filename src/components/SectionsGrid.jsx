import { User, BookOpen, Book, ArrowRight } from "lucide-react";

export default function SectionsGrid({ onBrowse, ensureAuth }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-yellow-100">Jump in</h2>
          <p className="mt-1 text-sm text-yellow-100/70">
            Create an account, dive into fiction/non-fiction picks, or upload PDFs to earn.
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
        <div
          id="fiction"
          className="group rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(234,179,8,0.4)]"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-300 ring-1 ring-yellow-500/30">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-yellow-100">Fiction picks</h3>
          </div>
          <p className="text-sm text-yellow-100/70">
            Discover reflections from popular fiction reads.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={() => ensureAuth(() => onBrowse("browse-fiction"))} className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300">
              Browse
            </button>
            <span className="text-xs text-yellow-100/60">Hover to preview</span>
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-2xl" />
        </div>

        {/* Non-Fiction card */}
        <div
          id="nonfiction"
          className="group rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(234,179,8,0.4)]"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-300 ring-1 ring-yellow-500/30">
              <Book className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-yellow-100">Non-Fiction picks</h3>
          </div>
          <p className="text-sm text-yellow-100/70">
            Find insights from the best non-fiction titles.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={() => ensureAuth(() => onBrowse("browse-nonfiction"))} className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300">
              Browse
            </button>
            <span className="text-xs text-yellow-100/60">Hover to preview</span>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-yellow-400/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
