import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Apply 20% discount for annual
  const m = isAnnual ? 0.8 : 1;
  const growthPrice = Math.round(50 * m);
  const proPrice = Math.round(75 * m);
  const enterprisePrice = Math.round(100 * m);

  const plans = [
    {
      name: 'Growth+',
      price: growthPrice,
      desc: 'Essential tools for growing schools to digitize operations.',
      features: [
        'Student Information System',
        'Attendance & Timetable',
        'HR & Payroll Management',
        'Advanced Fee Engine & UPI',
        'Exam & Report Cards',
        'Admission CRM Pipeline',
        'Parent Super App (iOS/Android)',
        'Basic Transport Management'
      ],
      missing: [
        'AI Predictive Analytics',
        'WhatsApp Business API',
        'NEP 2020 Holistic Cards'
      ]
    },
    {
      name: 'Pro+',
      price: proPrice,
      popular: true,
      desc: 'Advanced AI and automation for modern smart schools.',
      features: [
        'Everything in Growth+',
        'Fee Default AI Prediction',
        'NEP 2020 Holistic Cards',
        'AI Question Paper Generator',
        'AI Lead Scoring & Automation',
        'WhatsApp Business API',
        'Dropout Risk AI Detector',
        'Gate & Visitor Management',
        'Health & Infirmary Module'
      ],
      missing: []
    },
    {
      name: 'Enterprise',
      price: enterprisePrice,
      desc: 'Complete ecosystem for groups and multi-campus institutions.',
      features: [
        'Everything in Pro+',
        'Executive Group Dashboard',
        'Alumni CRM + Donations',
        'Multi-Campus Consolidated Finance',
        'Advanced BI Dashboard',
        'Dedicated Account Manager',
        'Custom API Integrations',
        'Priority 24/7 Support'
      ],
      missing: []
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-slate-900 mb-6">
            Competitive & Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Switch to the ultimate AI-based smart school ecosystem and save up to 60% compared to fragmented market alternatives.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-[#204E27] relative transition-colors duration-300 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 ${isAnnual ? 'transform translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annually <span className="px-2 py-0.5 rounded text-xs bg-[#EE9318]/20 text-[#EE9318]">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-8 bg-white border ${plan.popular ? 'border-[#204E27] shadow-xl ring-1 ring-[#204E27]' : 'border-slate-200 shadow-sm'} relative flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#204E27] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-500 font-medium">/stu/mo</span>
              </div>

              <div className="space-y-4 flex-grow mb-8">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#204E27] shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-50">
                    <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-500 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-[#204E27] text-white hover:bg-[#163920] shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-200 pt-10 text-center">
          <p className="text-slate-600 mb-6 font-medium">Add-ons Available Separately</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm">GPS Live Tracking: ₹800/bus/mo</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm">AI WhatsApp Chatbot: ₹5,000/mo</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm">White-Label Mobile App: ₹8,000/mo</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm">RFID Attendance: ₹500/reader/mo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
