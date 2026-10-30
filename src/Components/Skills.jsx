import React from "react";

const skillGroups = [
  { title: "Programming Languages", items: ["Java 11/17", "Python", "JavaScript", "TypeScript", "SQL", "PL/SQL"] },
  { title: "Computer Science Fundamentals", items: ["Data Structures", "Algorithms", "Advanced Algorithms", "OOP", "Design Patterns", "Time & Space Complexity"] },
  { title: "System Design & Architecture", items: ["HLD / LLD", "Distributed Systems", "Microservices", "REST APIs", "Event-Driven Architecture", "API Integration", "Scalability"] },
  { title: "Backend & Frontend", items: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Spring Cloud", "React.js", "Angular", "HTML5", "CSS3"] },
  { title: "Cloud & Infrastructure", items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS ECS / EKS", "CloudWatch", "Terraform", "Docker", "Kubernetes", "Helm"] },
  { title: "CI/CD & Developer Tools", items: ["Git", "GitHub", "GitHub Actions", "Jenkins", "Maven", "Jira", "SonarQube"] },
  { title: "Databases", items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "SQL Optimization", "Data Modeling"] },
  { title: "Messaging & Integration", items: ["Apache Kafka", "RabbitMQ", "AWS SQS", "Asynchronous Processing", "Event-Driven Workflows"] },
  { title: "Cybersecurity", items: ["OAuth2", "JWT", "RBAC", "IAM", "Authentication & Authorization", "API Security", "Secure Coding", "Vulnerability Awareness"] },
  { title: "AI & Agentic Engineering — Independent Learning", items: ["Generative AI", "LLMs", "LangChain Fundamentals", "RAG", "Prompt Engineering", "Tool Calling", "Agent Orchestration", "Human-in-the-Loop Validation", "AI-Generated Code Review"] }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-950 via-purple-950 to-black text-white py-16 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl font-extrabold mb-5 text-center bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text">⚡ Skills & Technologies</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Professional software engineering skills and separately identified emerging AI knowledge.</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl border border-white/10" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">{group.title}</h3>
            <div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="px-3 py-1.5 rounded-lg bg-white/10 border border-cyan-400/20 text-sm text-gray-200">{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
