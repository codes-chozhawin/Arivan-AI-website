import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Code, Wifi, Zap, Layers, FlaskConical, 
  TrendingUp, GraduationCap, Award, Monitor, BarChart3, 
  CheckCircle2, ArrowRight
} from 'lucide-react';

export const StemLabFeaturesSection = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-[#204E27]" />,
      title: "Robotics & Automation",
      desc: "Students learn robotics design, automation logic, sensors, and machine interaction through practical projects and real-world applications."
    },
    {
      icon: <Brain className="w-6 h-6 text-[#204E27]" />,
      title: "Artificial Intelligence",
      desc: "Introduce students to AI concepts, machine learning basics, smart systems, and future technologies in an easy interactive way."
    },
    {
      icon: <Code className="w-6 h-6 text-[#204E27]" />,
      title: "Coding & Programming",
      desc: "Hands-on coding experience using beginner-friendly and advanced programming platforms to develop logical thinking and computational skills."
    },
    {
      icon: <Wifi className="w-6 h-6 text-[#204E27]" />,
      title: "IoT & Smart Devices",
      desc: "Build smart systems using sensors, IoT modules, automation kits, and connected technologies for real-world innovation learning."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#204E27]" />,
      title: "Electronics & Circuit Design",
      desc: "Students explore circuits, components, electronics fundamentals, and hardware prototyping through engaging experiments."
    },
    {
      icon: <Layers className="w-6 h-6 text-[#204E27]" />,
      title: "3D Design & Innovation",
      desc: "Encourage creativity through product design, model creation, rapid prototyping, and innovation-focused activities."
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-[#204E27]" />,
      title: "Science Experiment Kits",
      desc: "Interactive science experiments that simplify complex concepts and improve practical understanding across subjects."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#204E27]" />,
      title: "Future Skills Development",
      desc: "Develop critical thinking, teamwork, communication, creativity, and problem-solving abilities required for future careers."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#204E27]" />,
      title: "Teacher Training & Support",
      desc: "Comprehensive teacher onboarding, training sessions, implementation guidance, and ongoing technical support included."
    },
    {
      icon: <Award className="w-6 h-6 text-[#204E27]" />,
      title: "NEP 2020 Aligned Curriculum",
      desc: "Designed to support experiential learning, skill-based education, and innovation-focused academic transformation."
    },
    {
      icon: <Monitor className="w-6 h-6 text-[#204E27]" />,
      title: "Smart Classroom Integration",
      desc: "Easily integrates with existing digital classrooms and modern school infrastructure for seamless adoption."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#204E27]" />,
      title: "Affordable & Scalable Setup",
      desc: "Flexible implementation models suitable for small, medium, and large schools across India."
    }
  ];

  const highlights = [
    "Industry-Relevant Technologies",
    "Student-Centric Practical Learning",
    "Future Career Preparation",
    "Easy Implementation",
    "End-to-End Support",
    "Cost Effective for Indian Schools"
  ];

  return (
    <section id="stem-features" className="py-24 bg-white relative overflow-hidden font-inter">
      {/* Background abstract accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#204E27]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#EE9318]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#204E27]/5 border border-[#204E27]/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#EE9318] animate-pulse"></span>
            <span className="text-sm font-bold text-[#204E27] uppercase tracking-wider">Lab Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-slate-900 mb-6 leading-tight">
            Powerful Features of Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#204E27] to-[#2d6e37]">STEM Innovation Lab</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Designed to transform traditional classrooms into future-ready innovation spaces through hands-on experiential learning.
          </p>
        </div>

        {/* Features Bento/Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#204E27]/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins group-hover:text-[#204E27] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  {feat.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EE9318] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Explore Module</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Highlight Section */}
        <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 lg:p-16 mb-24 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#204E27]/5 rounded-full blur-[80px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-poppins font-bold text-slate-900 mb-6">
                Why Schools Choose Our STEM Lab
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-light">
                We provide a comprehensive turn-key ecosystem rather than just physical hardware. From curated equipment to teacher alignment, we ensure continuous learning success.
              </p>
              <div className="inline-block border-l-4 border-[#EE9318] pl-6 py-2">
                <p className="text-slate-900 font-semibold italic">Empowering schools to stay ahead in modern tech education.</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4.5 rounded-xl border border-slate-100 shadow-sm hover:border-[#EE9318]/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#204E27]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#204E27]" />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#204E27] rounded-[2.5rem] p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EE9318] rounded-full filter blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full filter blur-[100px] opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-poppins font-extrabold mb-6 leading-tight">
              Ready to Build Future Innovators?
            </h3>
            <p className="text-lg text-green-50/90 mb-10 max-w-xl mx-auto leading-relaxed font-light">
              Transform your school into a modern innovation ecosystem with our advanced STEM Lab solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-[#EE9318] text-white rounded-full font-bold text-lg hover:bg-[#d68212] transition-colors shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
              <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Request STEM Lab Demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
