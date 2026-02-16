import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          Work
        </h1>
        <p className="mt-4 text-muted">
          Projects and deliverables from freelance and professional work.
        </p>

        <section className="mt-12 space-y-8">
          <article className="group rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-accent/10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                  Convicción Leasing
                </h2>
                <span className="mt-1 inline-block text-sm font-medium uppercase tracking-wider text-accent">
                  Freelance Project
                </span>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-foreground">
              Designed and delivered a modern, high-converting Single Page
              Application (SPA) for a leasing company, focused on performance,
              responsiveness, and polished user experience. Built to reinforce
              brand credibility while optimizing lead generation through a
              seamless contact flow.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Developed with React 18 and Vite for fast load times and
                  optimized performance
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Implemented smooth UI animations using Framer Motion to
                  enhance user engagement
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Built dynamic light/dark theme switching with system
                  preference detection
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Integrated contact form using EmailJS for reliable lead
                  capture without backend overhead
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Fully responsive layout across mobile, tablet, and desktop
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  SEO-optimized structure and metadata to improve discoverability
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                <span>
                  Clean, maintainable component architecture ready for future
                  scalability
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {["React 18", "Vite", "Framer Motion", "EmailJS", "Responsive", "SEO"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-block cursor-default rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-muted transition-all duration-200 ease-out hover:scale-105 hover:border-accent/50 hover:text-accent dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-accent/50"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <a
              href="https://www.conviccionleasing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-accent dark:hover:bg-accent"
            >
              <span>Visit website</span>
              <span aria-hidden>→</span>
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}
