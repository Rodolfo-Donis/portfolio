import type { Experience } from "@/models/experience";

export const experiences: readonly Experience[] = [
  {
    id: "relishiq",
    company: "RelishIQ",
    location: "Remote",
    title: "Software Engineer → Support Technical Lead",
    period: "Dec 2020 – Present",
    summary:
      "Joined a fast-paced SaaS startup as a Full Stack Engineer, owning end-to-end product development on AWS. Promoted to Support Technical Lead after 2.5 years based on deep system knowledge and leadership impact, overseeing a 7-member technical support team and driving automation across engineering and operations.",
    context:
      "RelishIQ is a B2B SaaS platform that extends enterprise procurement systems (SAP, Coupa, Workday) with supplier-data validation and AI invoice processing. I helped build and then operate the product that enterprise accounts payable teams use in production.",
    skills: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "JavaScript",
      "React",
      "REST APIs",
      "Microservices",
      "AWS Lambda",
      "DynamoDB",
      "NoSQL",
      "API Gateway",
      "S3",
      "RDS",
      "SQS",
      "Step Functions",
      "EventBridge",
      "CloudWatch",
      "CloudFormation",
      "HubSpot CRM",
      "Azure DevOps",
      "Git"
    ],
    highlights: [],
    roles: [
      {
        title: "Full Stack Engineering",
        period: "2020–2023",
        highlights: [
          "Owned services end-to-end from requirements gathering through design, implementation, and production deployment so features shipped as scalable solutions aligned to the business.",
          "Designed and implemented a serverless microservices architecture on AWS using DynamoDB, Lambda, Step Functions, API Gateway, S3, RDS, SQS, EventBridge, CloudWatch, and CloudFormation.",
          "Built high-availability REST APIs in Node.js and TypeScript, with secure backend services that other product modules and frontends depended on.",
          "Delivered responsive React frontends integrated with distributed backend services, keeping the UI in sync with event-driven workflows.",
          "Worked client-facing with customers to define specifications and ship key platform modules used in live enterprise invoice and supplier-validation workflows.",
          "Partnered with product managers, designers, and QA to coordinate production releases and keep the system stable as usage grew.",
          "Improved reliability through monitoring, automation, and catching defects early in the development cycle rather than in production.",
          "Mentored developers and established consistent coding standards and practices across the team.",
        ],
      },
      {
        title: "Support Technical Lead",
        period: "2023–Present",
        highlights: [
          "Lead and mentor a 7-member technical support engineering team, owning SLA compliance and timely incident resolution for enterprise customers.",
          "Raised operational maturity by introducing automation and standardization across IT Support, including scripts and internal bots that cut recurring manual work and improved communication between teams.",
          "Designed HubSpot CRM and Azure DevOps workflows to route tickets, manage the backlog, and give engineering a clearer view of customer issues.",
          "Reduced resolution time by tightening escalation paths and building internal tooling that support engineers actually use day to day.",
          "Act as technical liaison for enterprise clients including Foot Locker and United Airlines, joining calls, diagnosing issues, and keeping stakeholders informed through to resolution.",
          "Designed and delivered product and business trainings so the team ramps faster and handles complex invoice and supplier-data cases with less escalation.",
          "Run support work with agile prioritization, structured root-cause analysis, and closer alignment between support and engineering.",
          "Helped design scalable support processes and reporting so leadership can see volume, outcomes, and where the product needs to improve.",
        ],
      },
    ],
  },
  {
    id: "redes-de-control-2017",
    company: "Redes de Control S.A.",
    location: "Guatemala",
    title: "Software Developer",
    period: "Sep 2017 – Dec 2020",
    summary:
      "Full stack developer on enterprise web platforms and hybrid mobile solutions for local and international clients, covering feature delivery, third-party integrations, and production support.",
    context:
      "Redes de Control builds custom software for business operations. I worked across the stack on long-lived web products and mobile clients, with direct responsibility for international customer support after release.",
    skills: [
      "ASP.NET MVC",
      "ORM",
      "linQ",
      "C#",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Angular",
      "TypeScript",
      "REST APIs",
      "SQL",
      "Scrum",
      "Git"
    ],
    highlights: [
      "Developed and maintained enterprise web platforms with ASP.NET MVC, C#, JavaScript, jQuery, HTML, and CSS.",
      "Built hybrid mobile applications with Angular and TypeScript so clients could use the same business workflows on the go.",
      "Integrated third-party APIs to extend platform capabilities without rewriting core systems.",
      "Improved visual design and day-to-day usability across existing modules, not only new greenfield screens.",
      "Provided production support for international clients, diagnosing issues and keeping systems stable after go-live.",
      "Delivered work in Scrum: sprint planning, iterative releases, and close collaboration with the rest of the delivery team.",
    ],
  },
  {
    id: "xerox",
    company: "Xerox",
    location: "Guatemala",
    title: "Systems Development Specialist",
    period: "Jun 2016 – Sep 2017",
    summary:
      "Built and supported healthcare and state reporting systems in an enterprise environment, with a strong focus on data, reporting, and production reliability.",
    context:
      "Xerox ran large line-of-business systems for healthcare and government reporting. My work sat in that stack: application changes, SQL-heavy reporting, and keeping production modules healthy.",
    skills: [
      "ASP.NET",
      "C#",
      "VB.NET",
      "SQL",
      "Stored procedures",
      "Reporting",
      "Scrum",
    ],
    highlights: [
      "Developed application features in ASP.NET using C# and VB.NET against existing enterprise codebases.",
      "Wrote complex SQL queries, stored procedures, and reporting solutions used by healthcare and state reporting workflows.",
      "Supported production healthcare systems, testing, maintaining modules, and fixing issues without disrupting reporting cycles.",
      "Worked inside Agile/Scrum teams on prioritized backlog items from analysis through release.",
    ],
  },
  {
    id: "redes-de-control-2015",
    company: "Redes de Control S.A.",
    location: "Guatemala",
    title: "Software Developer",
    period: "Oct 2015 – May 2016",
    summary:
      "Delivered web application features and database work on ASP.NET MVC products, including data access design and participation in requirements and sprint cycles.",
    context:
      "First stretch at Redes de Control, focused on web delivery and SQL. This is where I built the MVC and database habits I later used on larger client platforms.",
    skills: ["ASP.NET MVC", "JavaScript", "SQL", "LINQ", "Scrum","linQ","ORM","C#","Javascript"],
    highlights: [
      "Built web application features with ASP.NET MVC and JavaScript.",
      "Designed and optimized SQL procedures, views, and LINQ-based data access for application screens and reports.",
      "Took part in requirements analysis and Agile development cycles so work stayed tied to what the client actually needed.",
    ],
  },
  {
    id: "pca",
    company: "PCA S.A. Profesionales Consultores Asociados",
    location: "Guatemala",
    title: "Software Developer",
    period: "Jun 2014 – Jul 2015",
    summary:
      "Maintained and extended .NET Web Forms business applications, including legacy modernization and UI improvements that made existing tools easier to use.",
    context:
      "PCA is a consulting firm delivering internal and client-facing business software. I worked on established .NET Web Forms apps , adding features while cleaning up older code rather than starting from a blank project.",
    skills: [".NET Web Forms", "C#", "HTML", "Bootstrap", "JavaScript"],
    highlights: [
      "Developed and maintained .NET Web Forms applications used in day-to-day consulting and client operations.",
      "Modernized legacy code and shipped new functionality without breaking existing business processes.",
      "Improved UI with HTML, Bootstrap, and JavaScript so forms and lists were clearer and more consistent.",
    ],
  },
  {
    id: "comsi",
    company: "Comsi Seguridad GPS",
    location: "Guatemala",
    title: "Software Developer",
    period: "Sep 2013 – Feb 2014",
    summary:
      "Contributed to a GPS security web platform from requirements and data modeling through feature delivery, testing, and code review in a Scrum team.",
    context:
      "Comsi Seguridad GPS operates vehicle and security tracking. I joined the product team building the web platform operators used to work with that data.",
    skills: ["Web development", "Data modeling", "Scrum", "Code review"],
    highlights: [
      "Analyzed business requirements and modeled data so new platform features matched how operations actually worked.",
      "Delivered web-based features from user stories, with testing and code reviews before release.",
      "Participated in Scrum ceremonies and iterative delivery rather than one-off, unreviewed changes.",
    ],
  },
];
