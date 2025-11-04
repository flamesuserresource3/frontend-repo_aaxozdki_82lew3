import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function ReviewForm({ initialBook, onBack, onSubmit }) {
  const [title, setTitle] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [paragraphs, setParagraphs] = useState(["", "", ""]);
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (initialBook) {
      setBookTitle(initialBook.title || "");
      setAuthor(initialBook.author || "");
    }
  }, [initialBook]);

  const handleParagraphChange = (idx, value) => {
    setParagraphs((prev) => prev.map((p, i) => (i === idx ? value : p)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = paragraphs.filter((p) => p.trim()).slice(0, 3);
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 3);
    onSubmit({ title, book: bookTitle, author, body, tags: tagList });
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-md border border-yellow-500/40 px-3 py-2 text-sm text-yellow-200 hover:bg-yellow-500/10"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h2 className="text-xl font-bold text-yellow-100">Write a reflection</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm text-yellow-200/80">Reflection Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-yellow-50 outline-none"
            placeholder="A concise takeaway"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-yellow-200/80">Book</label>
            <input
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              required
              className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-yellow-50 outline-none"
              placeholder="Book title"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-yellow-200/80">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-yellow-50 outline-none"
              placeholder="Author name"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <label className="mb-1 block text-sm text-yellow-200/80">Paragraph {i + 1}</label>
              <textarea
                value={p}
                onChange={(e) => handleParagraphChange(i, e.target.value)}
                rows={4}
                className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-yellow-50 outline-none"
                placeholder="Keep it short and specific"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="mb-1 block text-sm text-yellow-200/80">Tags (up to 3, comma separated)</label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-md border border-yellow-500/30 bg-black/60 px-3 py-2 text-yellow-50 outline-none"
            placeholder="reflection, productivity, fiction"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
          >
            Publish reflection
          </button>
        </div>
      </form>
    </section>
  );
}
