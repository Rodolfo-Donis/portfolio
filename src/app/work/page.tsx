import { ExperienceArticle } from "@/components/experience-article";
import { PageBackLink } from "@/components/page-back-link";
import { ProjectArticle } from "@/components/project-article";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <PageBackLink />

        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          Work
        </h1>
        <p className="mt-4 text-muted">
          A closer look at each role — what the product was, the problems I
          owned, and the stack I used. Written so recruiters can see scope,
          not just job titles.
        </p>

        <section className="mt-12">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            {experiences.map((experience) => (
              <ExperienceArticle
                key={experience.id}
                experience={experience}
                variant="work"
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Selected projects
          </h2>
          <div className="mt-6 space-y-8">
            {projects.map((project) => (
              <ProjectArticle key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
