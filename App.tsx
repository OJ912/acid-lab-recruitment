import React from 'react';
import { Terminal, Keyboard, Cpu, Zap, ArrowRight, MousePointer2 } from 'lucide-react';
import { IMAGES, TIMELINE, BENEFITS } from './constants';
import AcidCard from './components/AcidCard';
import GlitchTitle from './components/GlitchTitle';
import Marquee from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="min-h-screen acid-grid relative text-gray-200 selection:bg-[#ff00cc] selection:text-white">
      {/* Overlay Scanline Effect */}
      <div className="scanline"></div>

      {/* Top Marquee */}
      <Marquee text="UNIVERSITY INNOVATION LAB RECRUITMENT 2024 // JOIN THE FUTURE // CODE YOUR REALITY" />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 z-10">
          <div className="inline-block bg-[#ff00cc] text-black px-2 py-1 mb-4 text-xs font-bold border border-white transform -rotate-2">
            WARNING: HIGH VOLTAGE
          </div>
          <GlitchTitle text="LAB" />
          <GlitchTitle text="RECRUITMENT" />
          <p className="mt-8 text-lg md:text-xl font-mono text-[#ccff00] max-w-lg leading-relaxed border-l-4 border-[#ccff00] pl-6">
            大学生科技创新实验室招新指南
            <br />
            <span className="text-white text-sm mt-2 block opacity-80">
              BASED ON YOUR SKILLS // POWERED BY AI
            </span>
          </p>
        </div>
        
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-[#ccff00] transform translate-x-4 translate-y-4 border-2 border-black"></div>
          <img 
            src={IMAGES[3].src} 
            alt="Hero Lab" 
            className="relative w-full h-[400px] object-cover border-2 border-white grayscale hover:grayscale-0 transition-all duration-500 z-10"
          />
          <div className="absolute -bottom-6 -left-6 bg-black border border-white p-4 z-20 hidden md:block">
            <p className="font-mono text-xs text-[#ff00cc]">IMG_REF: 004</p>
            <p className="font-mono text-xs">CYBERPUNK_LAB_V1</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-16">
        <AcidCard variant="default" className="flex flex-col md:flex-row gap-8 items-center bg-[#111]">
          <div className="flex-1 space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <Zap className="text-[#ccff00]" size={32} />
                <h2 className="text-3xl font-bold uppercase italic">Core Philosophy</h2>
             </div>
             <p className="text-lg leading-relaxed font-light">
               本实验室致力于培养具备 <span className="text-[#ccff00] font-bold bg-white/10 px-1">实战能力</span> 与 <span className="text-[#ff00cc] font-bold bg-white/10 px-1">AI应用思维</span> 的创新人才。
             </p>
             <p className="text-gray-400">
               我们看重代码逻辑、动手效率以及对新技术的探索欲。无论最终是否入选，参与本流程所学的技能都将极大地助力你的大学学业与未来发展。
             </p>
          </div>
          <div className="flex-1 w-full">
            <img src={IMAGES[5].src} alt="Brain" className="w-full h-64 object-cover border border-[#333]" />
          </div>
        </AcidCard>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12 border-b-2 border-white/20 pb-4">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-transparent uppercase">
            Recruitment Process
          </h2>
          <span className="font-mono text-xs md:text-sm animate-pulse text-[#ccff00]">SYSTEM_READY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
           {/* Visual connection line for desktop */}
           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#333] hidden md:block -z-10"></div>

           {TIMELINE.map((step, index) => {
             const isEven = index % 2 === 0;
             const variant = index === 1 ? 'pink' : index === 2 ? 'green' : index === 3 ? 'purple' : 'default';
             
             return (
               <div key={step.id} className={`${isEven ? 'md:mr-12' : 'md:ml-12 md:mt-24'}`}>
                 <AcidCard variant={variant as any} title={`STAGE_${step.id}`} className="h-full bg-[#0a0a0a]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                        <p className={`text-xs font-mono font-bold ${variant === 'pink' ? 'text-[#ff00cc]' : variant === 'green' ? 'text-[#ccff00]' : variant === 'purple' ? 'text-[#9d00ff]' : 'text-gray-400'}`}>
                          {step.subtitle}
                        </p>
                      </div>
                      {step.icon === 'code' && <Terminal size={24} className="text-gray-500" />}
                      {step.icon === 'cpu' && <Cpu size={24} className="text-gray-500" />}
                      {step.icon === 'keyboard' && <Keyboard size={24} className="text-gray-500" />}
                      {step.icon === 'rocket' && <MousePointer2 size={24} className="text-gray-500" />}
                    </div>
                    
                    <ul className="space-y-2 mb-6 text-sm text-gray-300 font-mono">
                      {step.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#555] mt-1">{'>'}</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Image Injection for specific cards */}
                    {index === 0 && (
                       <img src={IMAGES[4].src} alt="Python Study" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all border border-[#333] mb-4" />
                    )}
                    {index === 1 && (
                       <img src={IMAGES[6].src} alt="Python Exam" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all border border-[#333] mb-4" />
                    )}
                    {index === 2 && (
                       <img src={IMAGES[7].src} alt="Typing Test" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all border border-[#333] mb-4" />
                    )}
                    {index === 3 && (
                       <img src={IMAGES[0].src} alt="AI Project" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all border border-[#333] mb-4" />
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {step.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-[#222] text-white px-2 py-1 border border-[#444]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                 </AcidCard>
               </div>
             );
           })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#ccff00] text-black py-20 mt-20 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff00cc]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="md:w-1/3">
              <h2 className="text-6xl font-black mb-6 tracking-tighter">WHY<br/>JOIN<br/>US?</h2>
              <div className="w-20 h-2 bg-black mb-6"></div>
              <p className="font-mono font-bold text-lg">
                这不是演习。<br/>
                THIS IS REAL SKILL ACQUISITION.
              </p>
              <img src={IMAGES[1].src} className="mt-8 border-4 border-black w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grayscale hover:grayscale-0 transition-all" alt="Join Team" />
            </div>

            <div className="md:w-2/3 grid gap-6">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 transition-transform">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold uppercase">{benefit.title}</h3>
                  </div>
                  <p className="font-mono text-sm md:text-base pl-12">
                    {benefit.desc}
                  </p>
                </div>
              ))}
              
              <div className="mt-8 p-6 border-2 border-dashed border-black">
                <p className="font-bold text-center text-sm">
                  *注：请关注实验室后续通知，获取具体的教程链接及辅导安排。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-[#555] py-12 border-t border-[#333]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-xs font-mono">
             <p>INNOVATION LAB © 2024</p>
             <p>DESIGNED_BY_ACID_PROTOCOL</p>
           </div>
           
           <button className="group relative px-8 py-3 bg-transparent overflow-hidden border border-[#555] text-white font-bold tracking-widest uppercase hover:text-black transition-colors">
              <span className="absolute inset-0 w-full h-full bg-[#ccff00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                Apply Now <ArrowRight size={16} />
              </span>
           </button>
        </div>
      </footer>
    </div>
  );
};

export default App;