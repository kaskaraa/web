import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 max-w-xl">
      <h1 className="font-mono text-5xl text-accent">404</h1>
      <p className="mt-6 text-lg">There is nothing at this address.</p>
      <p className="mt-6">
        <Link href="/" className="underline underline-offset-4 hover:text-accent">Back to the front page</Link>
      </p>
    </section>
  );
}
