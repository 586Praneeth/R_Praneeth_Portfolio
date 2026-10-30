import React from "react";

export default function Education() {
  return (
    <section id="education" className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      <div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Education & Certifications</h2></div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl"><h3 className="text-xl font-bold text-cyan-300 mb-2">Master of Science in Computer Science</h3><p className="text-gray-200">University of Central Missouri</p></div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl"><h3 className="text-xl font-bold text-cyan-300 mb-3">Professional Certifications</h3><ul className="text-gray-200 list-disc pl-5 space-y-2"><li>AWS Certified Developer – Associate (DVA-C02)</li><li>Microsoft Certified: Azure Developer Associate (AZ-204)</li></ul></div>
      </div>
    </section>
  );
}
