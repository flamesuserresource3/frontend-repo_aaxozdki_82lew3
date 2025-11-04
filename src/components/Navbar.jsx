import { useState } from "react";
import { BookOpen, User, Search, ChevronDown, LogOut } from "lucide-react";

export default function Navbar({ onNavigate, loggedIn, onSignInToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-yellow-400">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Book Reflection Hub</span>
        </button>
        <nav className="hidden items-center gap-6 md:flex">
          <button onClick={() => onNavigate("home")} className="text-sm text-yellow-50/80 hover:text-yellow-300">Home</button>
          <button onClick={() => onNavigate("browse-fiction")} className="text-sm text-yellow-50/80 hover:text-yellow-300">Fiction</button>
          <button onClick={() => onNavigate("browse-nonfiction")} className="text-sm text-yellow-50/80 hover:text-yellow-300">Non-Fiction</button>
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-yellow-200/60" />
            <input
              type="text"
              placeholder="Search books or tags"
              className="w-56 rounded-md border border-yellow-500/30 bg-black/60 py-2 pl-8 pr-3 text-sm text-yellow-50 placeholder:text-yellow-200/50 outline-none ring-0 transition focus:border-yellow-400/60"
              readOnly
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center gap-2 rounded-md border border-yellow-500/50 bg-yellow-500/10 px-3 py-2 text-sm font-medium text-yellow-200 transition hover:bg-yellow-500/20"
            >
              <User className="h-4 w-4" />
              {loggedIn ? "Account" : "Sign in"}
              <ChevronDown className="h-4 w-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-md border border-yellow-500/30 bg-zinc-950 p-1 shadow-lg">
                <button onClick={() => { onNavigate("browse-fiction"); setOpen(false); }} className="block w-full rounded p-2 text-left text-sm text-yellow-100 hover:bg-yellow-500/10">Browse Fiction</button>
                <button onClick={() => { onNavigate("browse-nonfiction"); setOpen(false); }} className="block w-full rounded p-2 text-left text-sm text-yellow-100 hover:bg-yellow-500/10">Browse Non-Fiction</button>
                <div className="my-1 h-px bg-yellow-500/20" />
                <button onClick={() => { onSignInToggle(); setOpen(false); }} className="flex w-full items-center gap-2 rounded p-2 text-left text-sm text-yellow-100 hover:bg-yellow-500/10">
                  {loggedIn ? <LogOut className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  {loggedIn ? "Sign out" : "Sign in"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
