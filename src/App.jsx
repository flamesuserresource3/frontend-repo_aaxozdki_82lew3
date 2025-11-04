import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionsGrid from "./components/SectionsGrid";
import Feed from "./components/Feed";

function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-yellow-100/70 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Book Reflection Hub</p>
        <div className="flex items-center gap-6">
          <a href="#feed" className="hover:text-yellow-300">Feed</a>
          <a href="#fiction" className="hover:text-yellow-300">Fiction</a>
          <a href="#upload" className="hover:text-yellow-300">Upload PDFs</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-yellow-50">
      <Navbar />
      <Hero />
      <SectionsGrid />
      <Feed />
      <Footer />
    </div>
  );
}
