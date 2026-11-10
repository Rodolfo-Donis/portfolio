import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 pt-[20vh] pb-24 sm:px-8">
        <header className="space-y-1">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Portfolio
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Rodolfo Donis
          </h1>
          <p className="font-heading text-xl text-muted sm:text-2xl">
            Software Developer
          </p>
        </header>

        <p className="mt-12 max-w-xl text-lg leading-relaxed text-muted">
          Senior Full Stack Engineer with 10+ years of experience designing,
          building, and scaling high-performance web applications in production
          environments. Specialized in cloud-native architectures, RESTful API
          design, and modern frontend development. Proven ability to deliver
          end-to-end solutions from system design through deployment and
          optimization with strong ownership and technical rigor. Brings a
          customer-first mindset, combining deep engineering expertise with
          exceptional client focus, stakeholder communication, and enterprise
          support experience to deliver reliable, scalable products that drive
          measurable business impact.
        </p>

        <SiteNav currentPath="/" className="mt-16" />
      </main>
    </div>
  );
}
