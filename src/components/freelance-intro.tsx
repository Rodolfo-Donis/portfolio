import type { ReactElement } from "react";
import { AccentLink } from "@/components/accent-link";
import { contactLinks } from "@/data/contact-links";

const textLinkClassName: string =
  "group inline-flex min-h-11 items-center gap-2 font-medium text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none";

/**
 * Renders the freelance introduction and its two calls to action.
 */
export function FreelanceIntro(): ReactElement {
  return (
    <header>
      <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
        Freelance
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Software that works for your business.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        I help businesses build web applications, connect their tools, and solve backend and database problems.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        I take on longer projects as well as focused ones. That means gathering requirements, delivering in Agile cycles, and staying in full communication with stakeholders, with software shaped so it can scale.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <AccentLink href={contactLinks.emailHref} label="Let's discuss your project" />
        <a href="#selected-work" className={textLinkClassName}>
          <span>Explore my work</span>
          <span aria-hidden className="text-muted transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
