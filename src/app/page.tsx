import Navbar from "../../components/navbar";
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <main className="container mx-auto px-6 md:px-10">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-16 md:pt-24">
          {/* Texto à esquerda */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Real-time crypto market intelligence
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-500">
              Clear charts, fast insights, and live news—so you can act with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[var(--primary)] text-[var(--primary-text)] hover:opacity-90 transition"
              >
                Open Dashboard
              </a>
              <a
                href="https://github.com/seu-usuario/seu-repo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition"
              >
                View GitHub
              </a>
            </div>

            <ul className="mt-6 text-sm text-gray-500 list-disc pl-5 space-y-1">
              <li>Price, volume, and 24h change</li>
              <li>Live news feed with summaries</li>
              {/* <li>Dark mode & responsive layout</li> */}
            </ul>
          </div>

          {/* Imagem à direita (não mexe no Navbar) */}
          <div className="hidden md:flex justify-end">
            <Image
              src="/back.jpg"       // coloque o arquivo em /public/back.jpg
              alt="Crypto visualization"
              width={560}
              height={560}
              className="object-contain"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}