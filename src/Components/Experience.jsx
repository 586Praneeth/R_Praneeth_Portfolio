import React from "react";

const experienceData = [
  {
    role: "Full Stack Developer (Java)", company: "Deloitte", date: "Nov 2025 – Present", location: "United States", icon: "💻", color: "from-cyan-400 to-blue-500",
    subtitle: "Client: State of New Mexico · ASPEN",
    tasks: [
      "Build and enhance Java 17, Spring Boot, React.js, and TypeScript features supporting eligibility determination, benefits processing, and case management.",
      "Work with ASPEN data collection, EDG, EDBC, and correspondence workflows, translating program rules into application changes.",
      "Develop secure REST APIs and Oracle SQL/PLSQL queries for enterprise integrations and database-driven business logic.",
      "Investigate projected release dates, facility records, duplicate data, batch processing, and production transaction inconsistencies.",
      "Prepare and validate controlled data fixes while preserving audit history and transaction integrity.",
      "Support AWS, Terraform, containerization, CI/CD, Python automation, and secure API practices as described in my resume."
    ]
  },
  {
    role: "Java Full Stack Developer", company: "Centene Corporation", date: "Jan 2025 – Oct 2025", location: "St. Louis, Missouri", icon: "🏥", color: "from-green-400 to-emerald-500",
    tasks: [
      "Supported healthcare application services with Spring Boot, Spring Data JPA, Hibernate, and REST APIs.",
      "Built reusable React.js components and integrated them with backend healthcare workflows.",
      "Used PostgreSQL, MySQL, and SQL to validate records, investigate data issues, and support application processing.",
      "Assisted with secure API integrations, OAuth2/JWT-based access, troubleshooting, and HIPAA-related development practices.",
      "Worked with AWS-based environments, Python utilities, automated testing, and CI/CD activities."
    ]
  },
  {
    role: "Software Engineer", company: "Mindtree", date: "Aug 2021 – Jun 2023", location: "Pune, India", icon: "⚙️", color: "from-purple-400 to-pink-500",
    tasks: [
      "Developed Spring Boot services and REST APIs for enterprise HR, finance, and business workflows.",
      "Implemented relational database operations and Redis caching to improve data retrieval efficiency.",
      "Supported AWS EC2 and CloudFormation configurations, backend integrations, and secure application development.",
      "Investigated service and SQL performance issues and contributed to testing with JUnit, Mockito, Selenium, and TestNG.",
      "Supported Jenkins/Git CI/CD workflows and collaborated with cross-functional Agile teams."
    ]
  },
  {
    role: "Junior Engineer", company: "ECIL", date: "May 2017 – Jun 2018", location: "Hyderabad, India", icon: "🔧", color: "from-orange-400 to-rose-500",
    tasks: [
      "Supported electronic equipment testing, instrumentation validation, and technical inspections.",
      "Assisted with hardware diagnostics, system troubleshooting, and maintenance activities.",
      "Reviewed technical documentation and recorded test findings, faults, and corrective actions."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-20 bg-gradient-to-b from-gray-950 via-purple-950 to-blue-900 text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</h2>
        <p className="text-gray-400 mt-3">Enterprise software development and engineering experience</p>
      </div>
      <div className="max-w-5xl mx-auto relative border-l-2 border-cyan-400/40 pl-6 md:pl-10 space-y-8">
        {experienceData.map((exp) => (
          <article key={`${exp.company}-${exp.date}`} className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className={`absolute -left-[39px] md:-left-[55px] top-8 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r ${exp.color}`} aria-hidden="true">{exp.icon}</div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div><h3 className="text-xl font-bold text-cyan-300">{exp.role}</h3><p className="font-semibold text-white">{exp.company}</p>{exp.subtitle && <p className="text-purple-200 text-sm mt-1">{exp.subtitle}</p>}</div>
              <p className="text-sm text-gray-300 md:text-right">{exp.date}<span className="block">{exp.location}</span></p>
            </div>
            <ul className="list-disc pl-5 text-gray-200 text-sm md:text-base leading-relaxed space-y-2">{exp.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
