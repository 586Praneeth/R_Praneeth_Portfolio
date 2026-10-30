import React from "react";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div data-aos="fade-right" className="flex justify-center">
          <img src={`${import.meta.env.BASE_URL}developer-illustration.svg`} alt="Software developer illustration" className="w-72 md:w-[26rem] drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] animate-float" />
        </div>
        <div data-aos="fade-left" className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 shadow-2xl rounded-3xl p-8 md:p-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6">About Me</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-5">
            I'm a <strong className="text-cyan-300">Java Full Stack Developer with approximately 4 years of software engineering experience</strong>, building and maintaining enterprise applications with Java, Spring Boot, React.js, Python, SQL, and RESTful APIs.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-5">
            My work spans <strong className="text-cyan-300">public-sector eligibility and benefits systems</strong>, healthcare applications, and enterprise integrations. I focus on backend business logic, database reliability, secure APIs, debugging, and practical workflow improvements.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-5">
            I work with cloud and delivery technologies including <strong className="text-cyan-300">AWS, Terraform, Docker, Kubernetes, and CI/CD</strong>, and value clean architecture, testing, and secure-by-design engineering.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            Alongside my professional experience, I'm <strong className="text-pink-300">independently learning Generative AI and Agentic AI</strong>, including LLMs, RAG, LangChain fundamentals, tool calling, and human-in-the-loop validation.
          </p>
        </div>
      </div>
    </section>
  );
}
