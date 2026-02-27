import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alexis Earvin",
  lastName: "Sañosa",
  name: `Alexis Earvin`,
  role: "Automation & AI Workflow Specialist",
  avatar: "/images/avatar.png",
  email: "alexissanosa@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
  //languages: ["English", "Bahasa"], optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sixela11",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://ph.linkedin.com/in/alexis-earvin-sanosa",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
 
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Connecting data, workflows, and AI</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Alexis, I build intelligent automation systems that save time, reduce errors, and scale operations.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
  <>
    <p style={{ textAlign: "justify" }}>
      I build automation systems that make work faster, easier, and more reliable.
    </p>
    <p style={{ textAlign: "justify" }}>  
      With a background in Python automation, database workflows, and large-scale
      data processing, I transform repetitive manual tasks into efficient automated
      solutions. I’ve developed scripts and pipelines that process millions of
      records, integrate APIs, and generate reports that support real-world
      operations and the convergence of design and technology.
    </p>

    <p style={{ textAlign: "justify", marginTop: "1rem" }}>
      I’m currently expanding into AI-powered automation and workflow tools to
      help businesses save time, reduce errors, and scale more effectively.
    </p>
  </>
),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Philippine Statistics Authority",
        timeframe: "2024 - Present",
        role: "Computer Maintenance Technologist II",
        achievements: [
          <p style={{ textAlign: "justify" }}>
            Deliver Tier 1 and Tier 2 technical support across enterprise systems, 
            ensuring high availability and minimal downtime.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Perform API testing using Postman and database validation through PgAdmin
            during diagnostics and QA validation.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Support deployment and user acceptance testing (UAT) of national-scale 
            systems.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Contribute to internal process automation using Python to streamline 
            repetitive operational workflows.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Maintain structured documentation aligned with Quality Management 
            Systems for audit readiness.
          </p>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Philippine Statistics Authority",
        timeframe: "2020 – 2024",
        role: "Information System Analyst",
        achievements: [
          <p style={{ textAlign: "justify" }}>
            Monitored backend systems to ensure real-time system availability 
            and escalated critical incidents.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Authored and executed test cases for system updates and new deployments.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Coordinated between developers and end-users to diagnose and resolve 
            application bugs.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Delivered technical documentation and training to internal users for 
            enterprise applications.
          </p>
        ],
        images: [],
      },
      {
        company: "Competitive Card Solutions Phils. Inc.",
        timeframe: "2019 – 2020",
        role: "Senior Technical Support Engineer",
        achievements: [
          <p style={{ textAlign: "justify" }}>
            Provided multi-channel technical support for enterprise clients.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Conducted root cause analysis for recurring system issues and 
            implemented preventative solutions.
          </p>,
          <p style={{ textAlign: "justify" }}>
            Supported QA testing and product validation initiatives.
          </p>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
    technical: {
    display: true,
    title: "Technical Projects",
    skills: [
      {
        title: "Python Data Pipeline Automation",
        description: (
          <>
            <p>
              <a
                href="https://github.com/sixela11/python-data-pipeline-automation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 600, textDecoration: "underline" }}
              >
                GitHub Project
              </a>
            </p>
            

            <ul style={{ marginTop: "0.75rem", paddingLeft: "1.2rem" }}>
              <li>
                Designed and implemented an automated data processing pipeline using Python.
              </li>
              <li>
                Built ingestion, transformation, validation, and export logic to reduce manual Excel consolidation tasks.
              </li>
              <li>
                Structured code using modular scripting practices and logging for maintainability.
              </li>
              <li>
                Demonstrates real-world workflow automation and operational efficiency improvements.
              </li>
            </ul>
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "CSV", icon: "file" },
          { name: "Data Processing", icon: "database" },
          { name: "Automation", icon: "zap" },
          { name: "ETL", icon: "shuffle" },
          { name: "API Integration", icon: "link" },
          { name: "PostgreSQL", icon: "database" },
          { name: "Logging", icon: "terminal" },
        ],
        images: [], // removed placeholder images for cleaner automation portfolio look
      },

      {
        title: "Automated Email Attachment Management System",
        description: (
          <>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>
                Designing automated task workflows using Notion databases and AI-assisted logic.
              </li>
              <li>
                API-based automation to trigger task creation and workflow updates.
              </li>
              <li>
                Focused on reducing manual tracking and improving operational visibility.
              </li>
            </ul>
          </>
        ),
        tags: [
          { name: "AI Automation", icon: "cpu" },
          { name: "Workflow Automation", icon: "workflow" },
          { name: "Notion API", icon: "notion" },
          { name: "Python", icon: "python" },
          { name: "API Integration", icon: "link" },
          { name: "Process Optimization", icon: "activity" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Next.js project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Lead Intake & CRM Automation System",
        description: (
          <>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>
                Built a multi-step automation workflow using Zapier to eliminate manual lead processing.
              </li>
              <li>
                Captures Google Form submissions and logs structured data into Google Sheets.
              </li>
              <li>
                Cleans and standardizes data using Zapier Formatter.
              </li>
              <li>
                Routes leads dynamically using conditional logic (Zapier Paths).
              </li>
              <li>
                Automatically updates CRM status in Notion.
              </li>
              <li>
                Sends Slack notifications and triggers automated email confirmations.
              </li>
              <li>
                Uses Storage by Zapier for state-based logic and tracking.
              </li>
              <li>
                Reduced response time and eliminated manual lead triage.
              </li>
            </ul>
          </>
        ),
        tags: [
          { name: "Zapier", icon: "zap" },
          { name: "Workflow Automation", icon: "workflow" },
          { name: "Google Forms", icon: "file-text" },
          { name: "Google Sheets", icon: "sheet" },
          { name: "Notion", icon: "notion" },
          { name: "Slack", icon: "slack" },
          { name: "Gmail", icon: "mail" },
          { name: "CRM Automation", icon: "database" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Lead Intake & CRM Automation Workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Automated Email Attachment Management System",
        description: (
          <>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>
                Built a dynamic file-processing automation using Zapier.
              </li>
              <li>
                Detects new email attachments automatically (Gmail trigger)
              </li>
              <li>
                Handles multiple attachments using Looping by Zapier
              </li>
              <li>
                Extracts and formats email metadata (date, sender name)
              </li>
              <li>
                Standardizes file naming conventions (YYYY-MM-DD-Sender-Filename)
              </li>
              <li>
                Renames each attachment dynamically before upload
              </li>
              <li>
                Uploads files individually into structured Google Drive folders
              </li>
              <li>
                Eliminates duplicate or comma-merged filenames caused by line-item data
              </li>
            </ul>
          </>
        ),
        tags: [
          { name: "Zapier", icon: "zap" },
          { name: "Email Automation", icon: "mail" },
          { name: "Gmail", icon: "mail" },
          { name: "Google Drive", icon: "folder" },
          { name: "Workflow Automation", icon: "workflow" },
          { name: "File Management", icon: "file" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Lead Intake & CRM Automation Workflow",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Workflow Automation",
        description: (
          <>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>
                Designing automated task workflows using Notion databases and AI-assisted logic.
              </li>
              <li>
                API-based automation to trigger task creation and workflow updates.
              </li>
              <li>
                Focused on reducing manual tracking and improving operational visibility.
              </li>
            </ul>
          </>
        ),
        tags: [
          { name: "AI Automation", icon: "cpu" },
          { name: "Workflow Automation", icon: "workflow" },
          { name: "Notion API", icon: "notion" },
          { name: "Python", icon: "python" },
          { name: "API Integration", icon: "link" },
          { name: "Process Optimization", icon: "activity" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Next.js project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
