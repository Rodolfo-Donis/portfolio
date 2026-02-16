import Link from "next/link";

export default function ResumePage() {
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
          Senior Full Stack Engineer with 10+ years of experience designing, building, and scaling high-performance web applications in production environments. Specialized in cloud-native architectures, RESTful API design, and modern frontend development. Proven ability to deliver end-to-end solutions from system design through deployment and optimization  with strong ownership and technical rigor. Brings a customer-first mindset, combining deep engineering expertise with exceptional client focus, stakeholder communication, and enterprise support experience to deliver reliable, scalable products that drive measurable business impact.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Skills
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ".NET Framework",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "React",
              "ASP.NET MVC",
              "Scrum",
              "Git / GitHub",
              "RESTful APIs",
              "AWS (Lambda, DynamoDB, S3, API Gateway, RDS, SQS)",
              "Microservices",
              "CloudFormation",
              "HubSpot CRM",
              "Azure DevOps",
              "Angular",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-block cursor-default rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm transition-all duration-200 ease-out hover:scale-110 hover:border-accent hover:bg-accent/10 hover:text-accent dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-accent/20"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Languages: English, Spanish
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Work History
          </h2>

          <div className="mt-6 space-y-10">
            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">
                  Software Engineer → Support Technical Lead
                </h3>
                <span className="text-sm text-muted">Dec 2020 – Present</span>
              </div>
              <p className="text-muted">RelishIQ — Remote</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Joined a fast-paced SaaS startup as a Full Stack Engineer,
                leading end-to-end product development on AWS. Promoted to
                Support Technical Lead after 2.5 years based on deep system
                knowledge and leadership impact, overseeing a 7-member technical
                support team and driving automation initiatives across
                engineering and operations.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-heading text-sm font-medium text-foreground">
                    Full Stack Engineering (2020–2023)
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                    <li>• Architected and implemented scalable AWS cloud infrastructure leveraging DynamoDB, Lambda, Step Functions, API Gateway, S3, RDS, SQS, EventBridge, and CloudWatch.</li>
                    <li>• Designed and developed RESTful APIs using Node.js, supporting high-availability microservices architecture.</li>
                    <li>• Built responsive React frontends integrated with distributed backend services.</li>
                    <li>• Improved system reliability through monitoring, automation, and proactive issue detection.</li>
                    <li>• Collaborated cross-functionally with product, QA, and UX to deliver production-ready releases.</li>
                    <li>• Mentored developers and established consistent coding standards and best practices.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-medium text-foreground">
                    Support Technical Lead (2023–Present)
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                    <li>• Lead and mentor a 7-member technical support engineering team.</li>
                    <li>• Designed automation workflows between HubSpot and Azure DevOps to optimize ticket routing and backlog management.</li>
                    <li>• Reduced resolution times by improving escalation processes and internal tooling.</li>
                    <li>• Acted as technical liaison for enterprise clients including Foot Locker and United Airlines, ensuring high-quality issue resolution and stakeholder communication.</li>
                    <li>• Strengthened alignment between support and engineering through structured root cause analysis and process optimization.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">Software Developer</h3>
                <span className="text-sm text-muted">Sep 2017 – Dec 2020</span>
              </div>
              <p className="text-muted">Redes de Control S.A.</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Full Stack Developer responsible for enterprise web platform
                development and hybrid mobile solutions in international
                projects.
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                <li>• Developed and maintained web applications using ASP.NET MVC, C#, JavaScript, and jQuery.</li>
                <li>• Built hybrid mobile applications with Angular and TypeScript.</li>
                <li>• Integrated third-party APIs to extend platform capabilities.</li>
                <li>• Provided production support for international clients, ensuring system stability.</li>
                <li>• Participated in Scrum ceremonies and iterative delivery cycles.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">
                  Systems Development Specialist
                </h3>
                <span className="text-sm text-muted">Jun 2016 – Sep 2017</span>
              </div>
              <p className="text-muted">Xerox</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Worked on healthcare and state reporting systems within
                enterprise-level environments.
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                <li>• Developed applications using ASP.NET, C#, and VB.NET.</li>
                <li>• Wrote complex SQL queries, stored procedures, and reporting solutions.</li>
                <li>• Supported production healthcare systems and state reporting workflows.</li>
                <li>• Contributed within Agile/Scrum development teams.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">Software Developer</h3>
                <span className="text-sm text-muted">Oct 2015 – May 2016</span>
              </div>
              <p className="text-muted">Redes de Control S.A.</p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                <li>• Built web applications using ASP.NET MVC and JavaScript.</li>
                <li>• Designed and optimized SQL database procedures, views, and LINQ-based data access.</li>
                <li>• Participated in requirements analysis and Agile development cycles.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">Software Developer</h3>
                <span className="text-sm text-muted">Jun 2014 – Jul 2015</span>
              </div>
              <p className="text-muted">
                PCA S.A. Profesionales Consultores Asociados
              </p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                <li>• Developed and maintained .NET Web Forms applications.</li>
                <li>• Performed legacy system modernization and feature enhancements.</li>
                <li>• Contributed to UI improvements using HTML, Bootstrap, and JavaScript.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold">Software Developer</h3>
                <span className="text-sm text-muted">Sep 2013 – Feb 2014</span>
              </div>
              <p className="text-muted">Comsi Seguridad GPS</p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                <li>• Analyzed business requirements and performed data modeling.</li>
                <li>• Developed web-based platform features using Scrum methodology.</li>
                <li>• Participated in code reviews and iterative product delivery.</li>
              </ul>
            </article>
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
            <p className="text-muted">Universidad Rafael Landívar — Guatemala (2011–2019)</p>
          </div>
        </section>
      </main>
    </div>
  );
}
