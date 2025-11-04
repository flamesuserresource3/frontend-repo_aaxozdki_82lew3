import { BookOpen, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-yellow-400">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Book Reflection Hub</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#feed" className="text-sm text-yellow-50/80 hover:text-yellow-300">Feed</a>
          <a href="#auth" className="text-sm text-yellow-50/80 hover:text-yellow-300">Join</a>
          <a href="#fiction" className="text-sm text-yellow-50/80 hover:text-yellow-300">Fiction</a>
          <a href="#upload" className="text-sm text-yellow-50/80 hover:text-yellow-300">Upload</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-200/60" />
            <input
              type="text"
              placeholder="Search books or tags"
              className="w-56 rounded-md border border-yellow-500/30 bg-black/60 py-2 pl-8 pr-3 text-sm text-yellow-50 placeholder:text-yellow-200/50 outline-none ring-0 transition focus:border-yellow-400/60"
            />
          </div>
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-md border border-yellow-500/50 bg-yellow-500/10 px-3 py-2 text-sm font-medium text-yellow-200 transition hover:bg-yellow-500/20"
          >
            <User className="h-4 w-4" />
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}
