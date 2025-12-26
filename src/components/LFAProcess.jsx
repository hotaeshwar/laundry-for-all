import React, { useState } from 'react';

const LFAProcess = () => {
  const [selected, setSelected] = useState(null);

  const processes = [
    { id: 1, title: 'Tagging', image: '/images/Tagging_11zon.webp', desc: 'Clothes are tagged to avoid potential mix up', info: 'Each garment receives a unique identification tag with barcode tracking to ensure your clothes are monitored throughout the entire process.' },
    { id: 2, title: 'Sorting', image: '/images/sorting_11zon.webp', desc: 'Carefully sorted by colour, material, texture, soiling level', info: 'Garments are sorted by color families, fabric types, texture, and degree of soiling for optimal cleaning results.' },
    { id: 3, title: 'Treatment', image: '/images/cuff_collar_11zon.webp', desc: 'Cuff & collar treated with special detergents', info: 'Problem areas receive targeted pre-treatment with specialized enzyme-based detergents for tough stains.' },
    { id: 4, title: 'Pre-Wash', image: '/images/pre_wash_11zon.webp', desc: 'Extra soiling gets special enzyme soak', info: 'Heavily soiled items undergo intensive enzyme treatment to break down stubborn stains before washing.' },
    { id: 5, title: 'Washing', image: '/images/washing_11zon.webp', desc: 'Washed as per the load type', info: 'Commercial washing machines with precise controls and customized cycles ensure thorough, eco-friendly cleaning.' },
    { id: 6, title: 'Softener', image: '/images/softener_11zon.webp', desc: 'Softener added as per finishing required', info: 'Premium fabric softeners provide luxurious softness, reduce static, and add fresh fragrance.' },
    { id: 7, title: 'Drying', image: '/images/drying_11zon.webp', desc: 'Air-dried in anti-bacterial stainless dryers', info: 'Industrial dryers with anti-bacterial coating provide gentle, controlled drying without damage.' },
    { id: 8, title: 'Ironing', image: '/images/ironing.png', desc: 'High pressure vacuum steam iron finishing', info: 'Professional steam pressing ensures crisp, wrinkle-free results with attention to every detail.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1aa6b3]">THE LFA PROCESS</h1>
          <p className="text-[#1aa6b3] text-lg md:text-xl mt-2 font-medium">Our 8-Step Professional Cleaning Methodology</p>
          <div className="w-24 h-1 bg-[#1aa6b3] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {processes.map((p) => (
            <div key={p.id} onClick={() => setSelected(p)} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-4 shadow hover:shadow-[0_0_30px_rgba(26,166,179,0.5)] transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#1aa6b3]">
                <div className="relative mx-auto w-24 h-24 mb-3">
                  <div className="absolute inset-0 bg-[#1aa6b3] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-white rounded-full border-3 border-[#1aa6b3] group-hover:border-[#1aa6b3] w-full h-full flex items-center justify-center transition-colors">
                    <img src={p.image} alt={p.title} className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#1aa6b3] text-center mb-2 transition-colors">{p.title}</h3>
                <p className="text-sm text-[#1aa6b3]/80 text-center leading-tight">{p.desc}</p>
                <p className="text-xs text-[#1aa6b3] font-semibold text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for details →</p>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1aa6b3] hover:text-white text-[#1aa6b3] text-xl transition-all">×</button>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 mb-4">
                  <div className="absolute inset-0 bg-[#1aa6b3] rounded-full blur-lg opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-[#e6f7f9] to-teal-50 rounded-full border-3 border-[#1aa6b3] w-full h-full flex items-center justify-center">
                    <img src={selected.image} alt={selected.title} className="w-20 h-20 object-contain" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#1aa6b3] mb-2">{selected.title}</h2>
                <p className="text-lg text-[#1aa6b3] font-semibold mb-2">{selected.desc}</p>
                <div className="w-20 h-px bg-[#1aa6b3] mb-3"></div>
                <p className="text-[#1aa6b3]/90 text-base leading-relaxed">{selected.info}</p>
                <button 
                  onClick={() => setSelected(null)}
                  className="mt-6 px-6 py-2 bg-[#1aa6b3] text-white font-medium rounded-full hover:bg-[#147c86] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-[#1aa6b3] text-lg font-medium">Each step is carefully executed by trained professionals</p>
          <p className="text-[#1aa6b3]/80 text-base mt-1">Quality assurance at every stage of the process</p>
        </div>
      </div>
    </div>
  );
};

export default LFAProcess;