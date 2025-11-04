import { useMemo, useState } from "react";
import { Search, ArrowLeft, Plus } from "lucide-react";

const FICTION_BOOKS = [
  { title: "The Night Circus", author: "Erin Morgenstern", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop" },
  { title: "Dune", author: "Frank Herbert", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop" },
  { title: "1984", author: "George Orwell", cover: "https://images.unsplash.com/photo-1544937950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" },
  { title: "The Song of Achilles", author: "Madeline Miller", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop" },
  { title: "Project Hail Mary", author: "Andy Weir", cover: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", cover: "https://images.unsplash.com/photo-1526312426976-593c2f0b8adb?q=80&w=800&auto=format&fit=crop" },
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
  { title: "Circe", author: "Madeline Miller", cover: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=800&auto=format&fit=crop" },
  { title: "Piranesi", author: "Susanna Clarke", cover: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=800&auto=format&fit=crop" },
];

const NONFICTION_BOOKS = [
  { title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" },
  { title: "Range", author: "David Epstein", cover: "https://images.unsplash.com/photo-1526312426976-593c2f0b8adb?q=80&w=800&auto=format&fit=crop" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop" },
  { title: "Sapiens", author: "Yuval Noah Harari", cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=800&auto=format&fit=crop" },
  { title: "Deep Work", author: "Cal Newport", cover: "https://images.unsplash.com/photo-1542089363-5c92d2371e9f?q=80&w=800&auto=format&fit=crop" },
  { title: "Educated", author: "Tara Westover", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop" },
  { title: "Outliers", author: "Malcolm Gladwell", cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=800&auto=format&fit=crop" },
  { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://images.unsplash.com/photo-1515165562835-c3b8c2e9f6e1?q=80&w=800&auto=format&fit=crop" },
  { title: "Why We Sleep", author: "Matthew Walker", cover: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800&auto=format&fit=crop" },
];

export default function BookBrowser({ category = "fiction", onBack, onSelectBook, onAddCustom }) {
  const [query, setQuery] = useState("");

  const data = category === "fiction" ? FICTION_BOOKS : NONFICTION_BOOKS;
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data.filter(
      (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }, [data, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-md border border-yellow-500/40 px-3 py-2 text-sm text-yellow-200 hover:bg-yellow-500/10"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <h2 className="text-xl font-bold text-yellow-100">
            Browse {category === "fiction" ? "Fiction" : "Non-Fiction"}
          </h2>
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-200/60" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or author"
            className="w-72 rounded-md border border-yellow-500/30 bg-black/60 py-2 pl-8 pr-3 text-sm text-yellow-50 placeholder:text-yellow-200/50 outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((b, idx) => (
          <button
            key={idx}
            onClick={() => onSelectBook(b)}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-lg border border-yellow-500/30 bg-zinc-950 transition hover:border-yellow-400/50">
              <img src={b.cover} alt={b.title} className="h-48 w-full object-cover" />
              <div className="p-3">
                <h3 className="line-clamp-1 font-semibold text-yellow-100">{b.title}</h3>
                <p className="mt-1 line-clamp-1 text-sm text-yellow-200/70">{b.author}</p>
                <span className="mt-3 inline-block rounded-md border border-yellow-500/40 px-2 py-1 text-xs text-yellow-200 transition group-hover:bg-yellow-500/10">
                  Write a review
                </span>
              </div>
            </div>
          </button>
        ))}

        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-yellow-500/40 bg-zinc-950 p-6 text-center">
          <div className="rounded-full bg-yellow-500/10 p-3 text-yellow-300 ring-1 ring-yellow-500/30">
            <Plus className="h-5 w-5" />
          </div>
          <p className="text-sm text-yellow-100/80">Don't see your book?</p>
          <button
            onClick={onAddCustom}
            className="rounded-md border border-yellow-500/40 px-3 py-2 text-sm text-yellow-200 hover:bg-yellow-500/10"
          >
            Add a custom book
          </button>
        </div>
      </div>
    </section>
  );
}
