'use client'

import Resume from "./resume";
const resumeUrl = '/pdf/resume.pdf';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#2352fc] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#2352fc] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#2352fc]/40 via-[#2352fc]/20 to-transparent" />

          <div className="space-y-12">
            {[
              {
                title: "Frontend Developer",
                company: "Myproperti Hub",
                location: "Remote",
                period: "2025 - Present",
                description: [
                  "Leading the development of a Real Estate listing website",
                  "Implementing responsive and mobile-first design principles with modern frontend technologies",
                  "Collaborating with the product team to deliver high-performance web applications with focus on user experience",
                  "Building scalable frontend architecture for multiple interconnected platforms"
                ]
              },
              {
                title: "Fullstack Developer Intern",
                company: "Innovation growth hub",
                location: "Abia, Nigeria",
                period: "2024 - Present",
                description: [
                  "Developed and maintained web applications using React, Next.js, Node.js, and MongoDB.",
                  "Collaborated with design and backend teams to build responsive, user-friendly interfaces with modern UI/UX principles.",
                  "Fixed bugs and implemented new features based on feedback from QA and users.",
                  "Worked with Git and GitHub for version control and participated in code reviews and daily scrums. "
                ]
              },
              {
                "title": "Blockchain Developer",
                "company": "Sui",
                "location": "Remote",
                "period": "2025 - Present",
                "description": [
                  "Developing and deploying smart contracts and Move modules within the Sui ecosystem.",
                  "Engineering secure on-chain data management and token transaction flows.",
                  "Integrating decentralized back-ends with front-end clients and off-chain services for seamless dApp experiences."
                ]
              },
              {
                title: "Director of IT",
                company: "Hideas Fashion Consultancy",
                location: "Remote / Abuja, Nigeria",
                period: "2025 - Present",
                description: [
                  "Leading all digital and IT operations to ensure alignment with business goals and brand vision.",
                  "Designing, developing, and maintaining the company’s website for optimal performance and aesthetics.",
                  "Managing and optimizing social media platforms to increase online presence and audience engagement.",
                  "Implementing scalable, secure technology solutions that drive innovation and business growth.",
                  "Collaborating with creative and marketing teams to craft unified and effective digital strategies."
                ]
              }
              
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#2352fc] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2352fc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#2352fc] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm">{experience.location}</span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#FFFFFF99] leading-relaxed font-light flex items-start">
                          <span className="text-[#2352fc] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="VictorKingsley.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
