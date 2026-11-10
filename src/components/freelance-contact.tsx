import type { ReactElement } from "react";
import { AccentLink } from "@/components/accent-link";
import { contactLinks } from "@/data/contact-links";

const quietLinkClassName: string =
  "text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

/**
 * Renders the freelance contact links from the verified resume destinations.
 */
export function FreelanceContact(): ReactElement {
  return (
    <section className="mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-800" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {"Have a workflow you'd like to simplify? Let's talk."}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Email or LinkedIn. These are the same addresses listed on my resume.
      </p>
      <div className="mt-8 flex flex-col items-start gap-4">
        <AccentLink href={contactLinks.emailHref} label="Let's discuss your project" />
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={contactLinks.emailHref} className={quietLinkClassName}>
            {contactLinks.email}
          </a>
          <a
            href={contactLinks.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className={quietLinkClassName}
          >
            {contactLinks.linkedInLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
