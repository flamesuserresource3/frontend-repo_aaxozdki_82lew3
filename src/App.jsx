import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionsGrid from "./components/SectionsGrid";
import Feed from "./components/Feed";
import BookBrowser from "./components/BookBrowser";
import ReviewForm from "./components/ReviewForm";

function Footer({ onBrowseFiction, onBrowseNonFiction }) {
  return (
    <footer className="border-t border-yellow-500/20 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-yellow-100/70 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Book Reflection Hub</p>
        <div className="flex items-center gap-6">
          <button onClick={onBrowseFiction} className="hover:text-yellow-300">Fiction</button>
          <button onClick={onBrowseNonFiction} className="hover:text-yellow-300">Non-Fiction</button>
        </div>
      </div>
    </footer>
  );
}

function LoginPrompt({ open, onClose, onContinueGuest, onSignIn }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-lg border border-yellow-500/30 bg-zinc-950 p-6">
        <h3 className="text-lg font-semibold text-yellow-100">Sign in to continue</h3>
        <p className="mt-1 text-sm text-yellow-100/70">
          Create an account to post reviews, like and save. You can also continue as a guest to browse.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button onClick={onSignIn} className="flex-1 rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300">
            Sign in
          </button>
          <button onClick={onContinueGuest} className="flex-1 rounded-md border border-yellow-500/40 px-4 py-2 text-sm text-yellow-200 hover:bg-yellow-500/10">
            Continue as guest
          </button>
          <button onClick={onClose} className="flex-1 rounded-md border border-yellow-500/40 px-4 py-2 text-sm text-yellow-200 hover:bg-yellow-500/10">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);
  const [pendingRoute, setPendingRoute] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = (r) => setRoute(r);

  const ensureAuth = (next) => {
    if (!loggedIn) {
      setPendingRoute(() => next);
      setLoginPromptOpen(true);
    } else {
      next();
    }
  };

  const handleBrowseFiction = () => ensureAuth(() => navigate("browse-fiction"));
  const handleBrowseNonFiction = () => ensureAuth(() => navigate("browse-nonfiction"));

  const startReview = (book) => {
    setSelectedBook(book || null);
    navigate("review");
  };

  const publishReview = (review) => {
    // In a full app, this would POST to the backend, then return to the feed
    console.log("Published review:", review);
    setSelectedBook(null);
    navigate("home");
  };

  return (
    <div className="min-h-screen bg-black text-yellow-50">
      <Navbar
        onNavigate={(r) => {
          if (r.startsWith("browse")) {
            ensureAuth(() => navigate(r));
          } else {
            navigate(r);
          }
        }}
        loggedIn={loggedIn}
        onSignInToggle={() => setLoggedIn((v) => !v)}
      />

      {route === "home" && (
        <>
          <Hero />
          <SectionsGrid onBrowse={navigate} ensureAuth={ensureAuth} />
          <Feed onBrowseFiction={handleBrowseFiction} onBrowseNonFiction={handleBrowseNonFiction} />
        </>
      )}

      {route === "browse-fiction" && (
        <BookBrowser
          category="fiction"
          onBack={() => navigate("home")}
          onSelectBook={startReview}
          onAddCustom={() => startReview({ title: "", author: "" })}
        />
      )}

      {route === "browse-nonfiction" && (
        <BookBrowser
          category="nonfiction"
          onBack={() => navigate("home")}
          onSelectBook={startReview}
          onAddCustom={() => startReview({ title: "", author: "" })}
        />
      )}

      {route === "review" && (
        <ReviewForm
          initialBook={selectedBook}
          onBack={() => navigate("home")}
          onSubmit={publishReview}
        />
      )}

      <Footer onBrowseFiction={handleBrowseFiction} onBrowseNonFiction={handleBrowseNonFiction} />

      <LoginPrompt
        open={loginPromptOpen}
        onClose={() => setLoginPromptOpen(false)}
        onContinueGuest={() => {
          setLoginPromptOpen(false);
          if (typeof pendingRoute === "function") pendingRoute();
        }}
        onSignIn={() => {
          setLoggedIn(true);
          setLoginPromptOpen(false);
          if (typeof pendingRoute === "function") pendingRoute();
        }}
      />
    </div>
  );
}
