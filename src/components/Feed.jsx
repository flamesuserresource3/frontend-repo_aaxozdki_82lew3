import { Heart, Bookmark } from "lucide-react";

const sampleReflections = [
  {
    id: 1,
    title: "Focus on what you can control",
    book: "The 7 Habits of Highly Effective People",
    body: [
      "Proactivity is about choosing your response. It's less about time management and more about attention management.",
      "When something is outside your circle of control, redirect energy to what you can influence today.",
    ],
    tags: ["habits", "productivity"],
  },
  {
    id: 2,
    title: "Ambiguity as a feature, not a bug",
    book: "Dune",
    body: [
      "Herbert invites the reader to sit with uncertainty. Power is contextual and information is always incomplete.",
      "I learned to treat unknowns as strategic space rather than roadblocks.",
    ],
    tags: ["fiction", "philosophy"],
  },
  {
    id: 3,
    title: "Learning compounds when shared",
    book: "Range",
    body: [
      "Generalists borrow mental models across domains. Reflection makes those transfers stick.",
      "Sharing notes publicly creates feedback loops you can't get alone.",
    ],
    tags: ["learning", "strategy"],
  },
];

function Tag({ label }) {
  return (
    <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-200">
      #{label}
    </span>
  );
}

export default function Feed() {
  return (
    <section id="feed" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-yellow-100">Latest reflections</h2>
          <p className="mt-1 text-sm text-yellow-100/70">
            Everyone can read reflections. Create an account to post yours.
          </p>
        </div>
        <a
          href="#auth"
          className="rounded-md border border-yellow-500/40 px-3 py-2 text-sm font-medium text-yellow-200 transition hover:bg-yellow-500/10"
        >
          Write a reflection
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sampleReflections.map((r) => (
          <article
            key={r.id}
            className="rounded-xl border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-yellow-100">{r.title}</h3>
                <p className="mt-1 text-sm text-yellow-300">{r.book}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-yellow-500/30 p-2 text-yellow-200 hover:bg-yellow-500/10">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="rounded-md border border-yellow-500/30 p-2 text-yellow-200 hover:bg-yellow-500/10">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-3 space-y-3 text-sm text-yellow-100/80">
              {r.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
