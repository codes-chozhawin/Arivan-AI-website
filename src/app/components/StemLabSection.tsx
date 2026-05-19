import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Wind, Brain, Monitor, 
  Lightbulb, Rocket, Users, Target, Shield, CheckCircle2, XCircle, ArrowRight,
  ChevronLeft, ChevronRight, Cpu, Code, Database,
  Settings, Microchip
} from 'lucide-react';

export const StemLabSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Motion variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 }
  };

  const renderPage1 = () => (
    <motion.div 
      key="page1"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="relative min-h-[800px] w-full flex items-center bg-gradient-to-br from-[#1a3f20] via-[#204e27] to-[#143219] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="STEM Innovation Lab" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#204e27]/90 to-[#204e27]/40"></div>
        {/* Subtle tech grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        {/* Yellow accent glow lines */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ee9318] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#ee9318] rounded-full blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-10 relative z-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-1.5 bg-[#ee9318] mb-10 shadow-[0_0_15px_rgba(238,147,24,0.6)]"></div>
            <h1 className="text-5xl lg:text-7xl font-montserrat font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              STEM <br/> Innovation Lab
            </h1>
            <h3 className="text-xl md:text-2xl text-[#ee9318] font-semibold mb-8 font-poppins">
              “Empowering Future Innovators Through Experiential Learning”
            </h3>
            <p className="text-lg text-slate-200 mb-12 leading-relaxed font-light max-w-lg">
              Transform your school into a future-ready learning ecosystem with an advanced STEM Innovation Lab designed for practical innovation, robotics, coding, AI, and next-generation learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-12">
              {['Robotics & Automation', 'Artificial Intelligence', 'Coding & Programming', 'IoT & Smart Electronics', 'Future Skills Development', 'NEP 2020 Aligned'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-[#ee9318]/20 flex items-center justify-center shrink-0 border border-[#ee9318]/50">
                    <CheckCircle2 className="w-4 h-4 text-[#ee9318]" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block border-l-4 border-[#ee9318] pl-6 py-2 bg-white/5 backdrop-blur-sm rounded-r-xl">
              <p className="text-white/90 italic font-semibold tracking-wide text-lg">“Learn by Building. Innovate by Doing.”</p>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800" alt="Students in STEM Lab" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#204e27]/80 to-transparent"></div>
             </div>
             {/* Tech Overlays */}
             <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4">
                <Brain className="w-10 h-10 text-[#ee9318]" />
                <div>
                  <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">AI Module</p>
                  <p className="font-bold text-white text-lg">Active</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPage2 = () => (
    <motion.div 
      key="page2"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="relative min-h-[800px] w-full bg-white overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-center py-16"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#204e27]/5 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-10 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#ee9318]"></span>
            <span className="text-[#ee9318] font-bold uppercase tracking-widest text-sm">Overview</span>
            <span className="h-px w-8 bg-[#ee9318]"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-[#204e27] mb-6">What is a STEM Innovation Lab?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A STEM Lab is an experiential learning ecosystem where students explore Science, Technology, Engineering, and Mathematics through practical activities, innovation, and real-world problem solving.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { letter: 'S', title: 'Science', desc: 'Learning scientific concepts through experimentation and discovery.', icon: <Wind className="w-8 h-8"/> },
            { letter: 'T', title: 'Technology', desc: 'Understanding coding, AI, and modern digital tools.', icon: <Monitor className="w-8 h-8"/> },
            { letter: 'E', title: 'Engineering', desc: 'Designing, building, and testing innovative solutions.', icon: <Settings className="w-8 h-8"/> },
            { letter: 'M', title: 'Mathematics', desc: 'Applying logic and analytical problem-solving skills.', icon: <Target className="w-8 h-8"/> }
          ].map((col, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-[#204e27]/30 transition-all hover:-translate-y-1">
              <div className="absolute -right-6 -top-10 text-[160px] font-black text-slate-900/5 group-hover:text-[#204e27]/5 transition-colors leading-none">{col.letter}</div>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#ee9318] mb-8 relative z-10">
                {col.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#204e27] mb-4 relative z-10 font-poppins">{col.title}</h3>
              <p className="text-sm text-slate-600 relative z-10 leading-relaxed">{col.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#204e27]/5 rounded-[2rem] p-10 border border-[#204e27]/10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Why STEM Education Matters</h3>
            <p className="text-slate-600 mb-8 text-lg">Today's students require future-ready skills for careers in:</p>
            <div className="grid grid-cols-2 gap-4">
              {['Artificial Intelligence', 'Robotics', 'Space Technology', 'Data Science', 'Automation', 'IoT Systems'].map((career, i) => (
                <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ee9318]"></div>
                  <span className="text-sm font-bold text-[#204e27]">{career}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-lg border border-slate-100">
            <h4 className="text-xl font-bold mb-8 text-[#204e27] font-poppins">Core Competencies Developed</h4>
            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              {[
                { icon: <Lightbulb />, text: 'Creativity' },
                { icon: <Rocket />, text: 'Innovation' },
                { icon: <Users />, text: 'Teamwork' },
                { icon: <Target />, text: 'Leadership' },
                { icon: <Shield />, text: 'Problem Solving' },
                { icon: <Brain />, text: 'Critical Thinking' }
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-[#204e27]/10 rounded-xl text-[#ee9318]">{React.cloneElement(skill.icon, {className: "w-6 h-6"})}</div>
                  <span className="font-semibold text-slate-700 text-base">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPage3 = () => (
    <motion.div 
      key="page3"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="relative min-h-[800px] w-full bg-gradient-to-br from-[#1e4624] to-[#112a15] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col justify-center py-16 border border-white/10"
    >
      {/* Modern Tech Overlays */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
              <polygon points="24.8,22 37.3,14.8 49.8,22 49.8,36.5 37.3,43.7" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
              <polygon points="0,-14.2 12.5,-7 12.5,7.5 0,14.7 -12.5,7.5 -12.5,-7" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-10 relative z-10 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">Benefits of STEM Innovation Labs</h2>
          <div className="inline-block px-8 py-3 bg-[#ee9318]/20 border border-[#ee9318]/30 rounded-full backdrop-blur-sm shadow-lg">
            <p className="text-[#ee9318] font-bold tracking-wider text-sm uppercase">“Building India’s Next Generation of Innovators”</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 relative">
          {/* Connecting middle line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#ee9318]/50 to-transparent -translate-x-1/2"></div>

          {/* Left: Student Benefits */}
          <div className="bg-white rounded-[2rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#204e27]/5 rounded-bl-[100%] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-[#204e27] rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 font-poppins">Student Benefits</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                'Hands-on Practical Learning',
                'Better Concept Understanding',
                'Creativity & Innovation Development',
                'Coding & Robotics Exposure',
                'Improved Problem-Solving Skills',
                'Confidence & Team Collaboration',
                'Future Career Readiness'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover/item:bg-[#ee9318]/10 group-hover/item:border-[#ee9318]/30 transition-colors shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#ee9318]" />
                  </div>
                  <span className="text-slate-700 font-semibold text-lg group-hover/item:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: School Benefits */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ee9318]/10 rounded-bl-[100%] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-[#ee9318] rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white font-poppins">School Benefits</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                'Enhances School Reputation',
                'Supports NEP 2020 Guidelines',
                'Attracts More Admissions',
                'Future-Ready Campus Branding',
                'Improves Student Engagement',
                'Advanced Smart Learning Infrastructure',
                'Teacher Training & Academic Support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-slate-200 font-semibold text-lg group-hover/item:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPage4 = () => (
    <motion.div 
      key="page4"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="relative min-h-[800px] w-full bg-[#112a15] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col py-16 border border-white/10"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ee9318] rounded-full blur-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#204e27] rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-10 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">Why Our STEM Lab is the Best Choice</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-[2fr_1fr_1fr] bg-slate-800 text-white p-6 font-bold text-base border-b border-slate-700">
                <div>Features</div>
                <div className="text-center text-[#ee9318]">Our STEM Lab</div>
                <div className="text-center text-slate-400">Traditional Vendors</div>
              </div>
              
              {[
                { f: "Affordable for Indian Schools", a: true, t: false },
                { f: "NEP 2020 Aligned", a: true, t: "Partial" },
                { f: "AI & Robotics Included", a: true, t: "Limited" },
                { f: "Teacher Training Included", a: true, t: "Extra Cost" },
                { f: "Complete Installation Support", a: true, t: "Limited" },
                { f: "Scalable Budget Options", a: true, t: false },
                { f: "Future Technology Modules", a: true, t: "Partial" },
                { f: "Annual Support", a: true, t: "Extra Charges" },
                { f: "Practical Learning Approach", a: true, t: "Traditional Theory" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[2fr_1fr_1fr] border-b border-slate-700/50 last:border-0 p-5 items-center hover:bg-white/5 transition-colors">
                  <div className="font-medium text-slate-200 text-base">{row.f}</div>
                  <div className="text-center text-emerald-400 font-semibold flex justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-center text-slate-400 text-sm font-medium flex justify-center items-center">
                    {row.t === false ? <XCircle className="w-5 h-5 text-red-400/70" /> : row.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'Cost Effective', desc: 'Designed for Indian schools with optimized investment plans.' },
                { title: 'Complete Support', desc: 'Installation, training, and yearly guidance included.' },
                { title: 'Future Technologies', desc: 'AI, Robotics, Coding, IoT integrated.' },
                { title: 'Scalable Solutions', desc: 'Suitable for schools of all sizes and budgets.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-[#ee9318] mb-3 text-base">{item.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#204e27] to-[#173a1d] rounded-[2rem] p-10 border border-white/10 text-center relative overflow-hidden mt-auto shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-white leading-tight font-poppins">Transform Your School Into a Future Innovation Hub</h3>
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 bg-[#ee9318] text-white rounded-xl font-bold text-lg hover:bg-[#d68212] transition-colors shadow-[0_0_20px_rgba(238,147,24,0.4)]">
                  Contact Us Today
                </button>
                <div className="flex gap-4">
                  <button className="flex-1 py-3.5 bg-white/10 border border-white/20 text-white text-sm rounded-xl font-semibold hover:bg-white/20 transition-colors">
                    Free Consultation
                  </button>
                  <button className="flex-1 py-3.5 bg-white/10 border border-white/20 text-white text-sm rounded-xl font-semibold hover:bg-white/20 transition-colors">
                    STEM Lab Demo
                  </button>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70 font-semibold tracking-wide">
                <span>✓ Budget Planning</span>
                <span>✓ Smart School Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="stem" className="py-24 bg-slate-50 font-inter relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#ee9318] uppercase tracking-wider mb-2">Brochure</h2>
            <h3 className="text-4xl font-poppins font-bold text-slate-900">STEM Innovation Lab Program</h3>
          </div>
          
          {/* Descriptive Top Tab Menu */}
          <div 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex items-center justify-between bg-white p-1.5 sm:p-2 rounded-2xl shadow-lg border border-slate-100 w-full sm:w-[680px] shrink-0 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            
            {[
              { id: 1, label: "Cover Page" },
              { id: 2, label: "What is STEM Lab?" },
              { id: 3, label: "Benefits" },
              { id: 4, label: "Why Choose Us" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shrink-0 whitespace-nowrap ${
                  currentPage === item.id 
                    ? 'bg-[#204e27] text-white shadow-md' 
                    : 'text-slate-600 hover:text-[#ee9318] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Brochure Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {currentPage === 1 && renderPage1()}
            {currentPage === 2 && renderPage2()}
            {currentPage === 3 && renderPage3()}
            {currentPage === 4 && renderPage4()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
