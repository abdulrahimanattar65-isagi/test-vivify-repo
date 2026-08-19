import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#071827] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        <p className="text-[#B98222] text-sm uppercase tracking-[0.25em] mb-5">
          Page Not Found
        </p>

        <h1 className="font-serif text-6xl md:text-8xl mb-6">
          404
        </h1>

        <p className="text-gray-400 leading-7 mb-8">
          Sorry, the page you're looking for doesn't exist.
          Let's get you back to VIVIFY.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#B98222] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-[#071827] transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}