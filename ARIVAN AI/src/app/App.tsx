import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Bus,
  Bell,
  BarChart3,
  Wifi,
  Camera,
  Droplet,
  Wind,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  AlertTriangle,
  Layers,
  Smartphone,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Bot,
  Activity,
  HeartPulse,
  Monitor,
  Settings,
  Menu,
  X,
  PlayCircle,
  Award
} from "lucide-react";
import { PricingSection } from "./components/PricingSection";
import { StemLabSection } from "./components/StemLabSection";
import arivanLogo from "./assets/arivan-logo.png";

// Helper for class names
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-inter text-slate-800 overflow-x-hidden">
      {/* 1. HERO SECTION (HIGH IMPACT) */}
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={arivanLogo}
                alt="ARIVAN AI Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-[#214D28] leading-tight tracking-tight">
                  ARIVAN AI
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                  Smart School Ecosystem
                </span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
              <a href="#features" className="text-slate-600 hover:text-[#204E27] transition-colors">Platform</a>
              <a href="#solutions" className="text-slate-600 hover:text-[#204E27] transition-colors">Solutions</a>
              <a href="#dashboard" className="text-slate-600 hover:text-[#204E27] transition-colors">AI Dashboard</a>
              <a href="#stem" className="text-slate-600 hover:text-[#204E27] transition-colors">STEM Labs</a>
              <div className="w-px h-4 bg-slate-300"></div>
              <button className="text-slate-700 hover:text-[#204E27] font-semibold transition-colors">Login</button>
              <button className="px-6 py-2.5 rounded-full bg-[#204E27] text-white hover:bg-[#163920] transition-all shadow-md hover:shadow-xl font-medium">
                Book Free Demo
              </button>
            </div>

            <button className="lg:hidden text-slate-700" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-br from-[#204E27]/10 to-[#EE9318]/10 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#204E27]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#204E27]/10 mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#EE9318] animate-pulse"></span>
                <span className="text-sm font-semibold text-[#204E27] uppercase tracking-wider">The Future of Education is Here</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-montserrat font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                AI-BASED <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#204E27] to-[#2d6e37]">SMART SCHOOL</span> <br/>
                ECOSYSTEM
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-inter">
                Complete Safety, Monitoring, Communication & Automation Platform for Modern Educational Institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-full bg-[#204E27] text-white hover:bg-[#163920] transition-all shadow-[0_8px_30px_rgb(32,78,39,0.3)] hover:shadow-[0_8px_30px_rgb(32,78,39,0.5)] flex items-center justify-center gap-2 font-semibold text-lg group">
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2 font-semibold text-lg group">
                  <PlayCircle className="w-5 h-5 text-[#EE9318]" />
                  Explore Features
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 font-montserrat">100+</h4>
                  <p className="text-sm text-slate-500 mt-1">Smart Schools</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 font-montserrat">50k+</h4>
                  <p className="text-sm text-slate-500 mt-1">Students Monitored</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 font-montserrat">99.9%</h4>
                  <p className="text-sm text-slate-500 mt-1">Safety Tracking</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 font-montserrat">24/7</h4>
                  <p className="text-sm text-slate-500 mt-1">Real-time Alerts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full max-w-[550px] lg:ml-auto"
            >
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 ring-1 ring-black/5 bg-slate-100">
                <img 
                  src="/square_hero_banner.png" 
                  alt="Modern Indian School Campus" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#204E27]/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating UI Cards - Glassmorphism */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#204E27]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Campus Status</p>
                  <p className="font-bold text-slate-900">100% Secured</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/3 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Bus className="w-6 h-6 text-[#EE9318]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Live Tracking</p>
                  <p className="font-bold text-slate-900">Bus #42 Arriving</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SCHOOL PROBLEMS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-10">
                <h2 className="text-sm font-bold text-[#EE9318] uppercase tracking-wider mb-2">The Challenge</h2>
                <h3 className="text-4xl font-poppins font-bold text-slate-900 leading-tight">
                  Traditional Schools Face <br/>Modern Challenges
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <Activity className="w-5 h-5" />, title: "No real-time student visibility", desc: "Administrators lack instant tracking of student whereabouts." },
                  { icon: <AlertTriangle className="w-5 h-5" />, title: "Parent concerns on bus safety", desc: "Anxiety over delayed buses and unverified pickups." },
                  { icon: <Clock className="w-5 h-5" />, title: "Delayed communication", desc: "Important notices fail to reach parents instantly." },
                  { icon: <Layers className="w-5 h-5" />, title: "Manual operations & scattered data", desc: "Multiple tools that don't talk to each other." },
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#EE9318]/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#EE9318] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Flow Diagram */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-[3rem] -rotate-3 transform scale-105"></div>
              <div className="relative bg-white rounded-[2.5rem] shadow-xl p-8 border border-slate-100">
                <h4 className="text-center font-bold text-slate-800 mb-8 text-xl font-poppins">Traditional vs AI Smart Campus</h4>
                
                <div className="flex flex-col gap-6 relative">
                  {/* Connection Line */}
                  <div className="absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-200 via-slate-200 to-green-400"></div>

                  <div className="flex items-center gap-6 relative z-10 opacity-60">
                    <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-500 shrink-0">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 line-through">Manual Attendance</h5>
                      <p className="text-xs text-slate-500">Takes 15+ minutes per class</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 relative z-10 opacity-60">
                    <div className="w-14 h-14 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center text-orange-500 shrink-0">
                      <Bell className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 line-through">Delayed SMS</h5>
                      <p className="text-xs text-slate-500">Often missed by parents</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 relative z-10 mt-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-white border border-green-100 shadow-sm">
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-sm"></div>
                    <div className="w-14 h-14 rounded-full bg-[#204E27] flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#204E27] text-lg">AI Smart Ecosystem</h5>
                      <p className="text-sm text-slate-600">Automated, Real-time, Connected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SMART SOLUTION FLOW SECTION */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#204E27] uppercase tracking-wider mb-2">How It Works</h2>
            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
              Advanced AI Workflow
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A seamless flow of data from physical actions to digital insights, ensuring perfect synchronization.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#204E27]/20 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
              {[
                { icon: <Shield />, title: "RFID Scan", desc: "Student entry" },
                { icon: <Cpu />, title: "System Verify", desc: "Identity checked" },
                { icon: <Bell />, title: "Parent Alert", desc: "Instant push" },
                { icon: <MapPin />, title: "Live Tracking", desc: "Bus route ETA" },
                { icon: <Monitor />, title: "Dashboard", desc: "Admin updated" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-[#204E27] mb-6 relative group transition-transform hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#204E27]/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform"></div>
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 relative z-10" })}
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#EE9318] text-white font-bold flex items-center justify-center border-2 border-white text-sm shadow-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 font-poppins">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES SECTION */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#EE9318] uppercase tracking-wider mb-2">Core Platform</h2>
            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
              Modular Enterprise Features
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureBentoCard
              icon={<Bus />}
              title="Fleet & Student Safety"
              desc="Comprehensive tracking and safety alerts"
              features={["Live GPS tracking", "RFID attendance", "Entry/exit alerts", "Stop notifications"]}
              color="bg-blue-50 text-blue-600"
              borderColor="hover:border-blue-200"
            />
            <FeatureBentoCard
              icon={<Camera />}
              title="Smart Campus Monitoring"
              desc="IoT sensors and AI camera analytics"
              features={["AQI monitoring", "Water quality tracking", "Smoke/fire detection", "Smart CCTV"]}
              color="bg-emerald-50 text-emerald-600"
              borderColor="hover:border-emerald-200"
            />
            <FeatureBentoCard
              icon={<Monitor />}
              title="Central Command Center"
              desc="Single pane of glass for all operations"
              features={["Unified dashboard", "Real-time alerts", "Admin control", "Reports & analytics"]}
              color="bg-purple-50 text-purple-600"
              borderColor="hover:border-purple-200"
            />
            <FeatureBentoCard
              icon={<BookOpen />}
              title="School CRM System"
              desc="Academic and administrative management"
              features={["Attendance", "Exams & Homework", "Timetable", "Parent communication"]}
              color="bg-orange-50 text-orange-600"
              borderColor="hover:border-orange-200"
            />
            <FeatureBentoCard
              icon={<Bot />}
              title="STEM Innovation"
              desc="Future-ready educational technology"
              features={["Robotics", "AI learning", "IoT education", "Drone technology"]}
              color="bg-indigo-50 text-indigo-600"
              borderColor="hover:border-indigo-200"
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* 5. AI DASHBOARD SHOWCASE */}
      <section id="dashboard" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Command Center</h2>
            <h3 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
              Enterprise Dashboard UI
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real-time analytics, predictive insights, and complete operational control in one dark-mode optimized view.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-[#EE9318] rounded-3xl blur opacity-30 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
              {/* Dashboard Header Mockup */}
              <div className="h-12 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs font-mono text-slate-400">admin.arivan.ai</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                alt="AI Dashboard Interface" 
                className="w-full h-auto object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            
            {/* Floating Metric */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400">System Efficiency</p>
                <p className="text-2xl font-bold text-white">98.5%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARENT TRUST SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Phone Mockup Container */}
              <div className="relative w-72 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#204E27]/20 to-[#EE9318]/20 rounded-[3rem] blur-xl transform translate-x-4 translate-y-4"></div>
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] relative">
                    {/* App Header */}
                    <div className="bg-[#204E27] text-white pt-12 pb-6 px-6 rounded-b-[2rem]">
                      <h4 className="font-poppins font-bold text-xl">Arjun's Timeline</h4>
                      <p className="text-sm opacity-80">Today, 18 May</p>
                    </div>
                    {/* Notifications Mockup */}
                    <div className="p-6 space-y-4">
                      <NotificationMockup time="08:15 AM" title="Campus Entry" desc="Arjun has entered the school campus safely." icon={<Shield className="w-4 h-4 text-emerald-600"/>} color="bg-emerald-100" />
                      <NotificationMockup time="12:30 PM" title="Attendance" desc="Marked present for all periods." icon={<CheckCircle2 className="w-4 h-4 text-blue-600"/>} color="bg-blue-100" />
                      <NotificationMockup time="03:45 PM" title="Bus Boarded" desc="Boarded Bus #42. ETA home: 15 mins." icon={<Bus className="w-4 h-4 text-[#EE9318]"/>} color="bg-orange-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
                Transparency Builds Parent Trust
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Give parents peace of mind with real-time updates. When safety and communication are transparent, trust in the institution skyrockets.
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex gap-1 mb-3 text-[#EE9318]">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="italic text-slate-700 font-medium mb-4">"The instant notifications when my child boards the bus and enters the campus have completely removed my daily anxiety. Brilliant system."</p>
                  <p className="text-sm font-bold text-slate-900">— Priya S., Parent of Grade 4 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS IMPACT SECTION */}
      <section className="py-24 bg-[#204E27] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              High-Conversion ROI
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Smart technology doesn't just improve safety—it drives admissions, saves operational costs, and builds reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ImpactCard value="+35%" label="Increased Admissions" desc="Due to enhanced reputation for safety and tech-readiness." />
            <ImpactCard value="20hrs" label="Saved Weekly" desc="Reduction in manual administrative and attendance workloads." />
            <ImpactCard value="98%" label="Parent Satisfaction" desc="Boosted engagement and positive feedback on communication." />
          </div>
        </div>
      </section>

      {/* 8. STEM LAB BROCHURE SECTION */}
      <StemLabSection />

      {/* 9. WHY CHOOSE US SECTION (Comparison) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
              The ARIVAN Difference
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 font-bold text-slate-900 text-lg">
              <div>Features</div>
              <div className="text-center text-slate-500">Traditional Schools</div>
              <div className="text-center text-[#204E27]">AI Smart Schools</div>
            </div>
            
            {[
              { f: "Safety Monitoring", t: "Manual / Reactive", a: "Automated / Proactive" },
              { f: "Parent Communication", t: "Delayed SMS/Diaries", a: "Real-time App Notifications" },
              { f: "Operational Efficiency", t: "Paper-based / Slow", a: "Data-driven / Instant" },
              { f: "Student Innovation", t: "Standard Curriculum", a: "STEM & AI Ecosystem" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 p-6 items-center">
                <div className="font-medium text-slate-700">{row.f}</div>
                <div className="text-center text-slate-500 text-sm">{row.t}</div>
                <div className="text-center text-[#204E27] font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  {row.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.5 PRICING SECTION */}
      <PricingSection />

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[#204E27]/90 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000" 
          alt="Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Soft animated particles overlay */}
        <div className="absolute inset-0 z-20 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjI1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-30 text-center">
          <h2 className="text-5xl md:text-7xl font-poppins font-extrabold mb-8 tracking-tight">
            MAKE YOUR SCHOOL <br/>FUTURE-READY TODAY
          </h2>
          <p className="text-xl md:text-2xl text-green-50 mb-12 font-inter font-light">
            Transform safety, communication, operations, and innovation with one intelligent ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-5 rounded-full bg-white text-[#204E27] hover:bg-green-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] font-bold text-lg font-poppins">
              Schedule Demo
            </button>
            <button className="px-10 py-5 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all font-bold text-lg font-poppins">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-[#112a15] text-slate-300 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={arivanLogo}
                  alt="ARIVAN AI Logo"
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
                <span className="font-poppins font-bold text-xl text-white">ARIVAN AI</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm">
                Enterprise-grade AI-Based Smart School Ecosystem. Elevating education through safety, technology, and innovation.
              </p>
              <div className="text-sm space-y-2">
                <p>📞 +91 98765 43210</p>
                <p>✉️ contact@arivan.ai</p>
                <p>📍 Tech Park, Bangalore, India</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 font-poppins">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Safety Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">School CRM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">STEM Labs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 font-poppins">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 font-poppins">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} ARIVAN AI Platform. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EE9318] hover:text-white transition-all">X</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EE9318] hover:text-white transition-all">in</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#EE9318] hover:text-white transition-all">f</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function Cpu(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function FeatureBentoCard({ icon, title, desc, features, color, borderColor, className = "" }: any) {
  return (
    <div className={cn("p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group", className, borderColor)}>
      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", color)}>
        {React.cloneElement(icon, { className: "w-7 h-7" })}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-2 font-poppins">{title}</h4>
      <p className="text-slate-500 mb-6 text-sm">{desc}</p>
      <ul className="space-y-3">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotificationMockup({ time, title, desc, icon, color }: any) {
  return (
    <div className="flex gap-4 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", color)}>
        {icon}
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-slate-900 text-sm">{title}</h5>
          <span className="text-[10px] text-slate-400 font-medium">{time}</span>
        </div>
        <p className="text-xs text-slate-500 leading-snug">{desc}</p>
      </div>
    </div>
  );
}

function ImpactCard({ value, label, desc }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
      <div className="text-5xl font-poppins font-bold text-[#EE9318] mb-4">{value}</div>
      <h4 className="text-xl font-bold text-white mb-2">{label}</h4>
      <p className="text-green-100/80 text-sm">{desc}</p>
    </div>
  );
}