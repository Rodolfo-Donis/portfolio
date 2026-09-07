import { ExperienceArticle } from "@/components/experience-article";
import { PageBackLink } from "@/components/page-back-link";
import { SkillChip } from "@/components/skill-chip";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <PageBackLink />

        <header className="mb-12 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Rodolfo Donis
          </h1>
          <p className="mt-1 font-heading text-xl text-muted">
            Software Developer
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <a
              href="mailto:donisrodolfo@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              donisrodolfo@gmail.com
            </a>
            <a
              href="tel:+50245194908"
              className="transition-colors hover:text-foreground"
            >
              +502 4519 4908
            </a>
            <a
              href="https://www.linkedin.com/in/rodolfo-donis-godinez/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <span>Guatemala City</span>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Summary
          </h2>
          <p className="mt-3 leading-relaxed text-foreground">
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
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Skills
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Languages: English (advanced), Spanish (native)
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Work History
          </h2>
          <div className="mt-6 space-y-12">
            {experiences.map((experience) => (
              <ExperienceArticle
                key={experience.id}
                experience={experience}
                variant="resume"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="font-heading font-semibold">
              Bachelor of Computer Science and Systems
            </h3>
            <p className="text-muted">
              Universidad Rafael Landívar — Guatemala (2011–2019)
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
