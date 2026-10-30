import React from "react";

export default function Hero() {
  const tags = ["Java 17 & Spring Boot", "React & TypeScript", "AWS & Terraform", "Microservices & REST APIs", "API Security", "Python Automation", "Agentic AI — Learning"];
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 py-16 max-w-6xl mx-auto bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white overflow-hidden rounded-3xl shadow-2xl">
      <div className="flex-1 w-full text-center md:text-left mb-10 md:mb-0">
        <div className="flex gap-4 justify-center md:justify-start mb-6 flex-wrap">
          {[{src:"aws.jpg",alt:"AWS Certified Developer – Associate"},{src:"azure.jpg",alt:"Microsoft Azure Developer Associate"}].map(cert => (
            <div key={cert.alt} className="p-2 bg-white/10 border border-cyan-400/30 rounded-xl shadow-md"><img src={`${import.meta.env.BASE_URL}${cert.src}`} alt={cert.alt} className="w-14 h-14 md:w-16 md:h-16 object-contain" /></div>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Praneeth R</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-4">Java Full Stack Developer</h2>
        <p className="text-gray-300 mb-3">M.S. in Computer Science · University of Central Missouri</p>
        <p className="text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">Software engineer with <strong className="text-cyan-300">approximately 4 years of experience</strong> building secure enterprise applications, backend services, and cloud-native workflows. Focused on <strong>Java, Spring Boot, React, AWS, Terraform, and API security</strong>, with growing knowledge of Generative AI and agentic systems.</p>
        <div className="flex flex-wrap gap-2 my-6 justify-center md:justify-start">{tags.map(tag => <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-cyan-400/30 text-cyan-200 text-xs">{tag}</span>)}</div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm">View Resume</a>
          <a href="https://github.com/586praneeth" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-300 font-medium text-sm">GitHub Projects</a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="px-5 py-2 rounded-lg border border-gray-400 text-gray-200 font-medium text-sm">Download Resume</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end"><img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Praneeth R" className="rounded-full shadow-xl border-4 border-cyan-400 w-52 h-52 md:w-72 md:h-72 object-cover" /></div>
    </section>
  );
}
