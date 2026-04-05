import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center page-enter">
      <div className="text-center px-6">
        <h1 className="text-8xl sm:text-9xl font-[Avenir] text-white tracking-tight">404</h1>
        <p className="mt-4 text-2xl font-[Sagona] text-text-muted">Page Not Found</p>
        <Link
          href="/"
          className="inline-block mt-10 text-sm uppercase tracking-widest text-text-secondary hover:text-accent transition-colors border-b border-metal-dark hover:border-accent pb-1"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}
