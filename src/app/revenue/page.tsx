"use client";

import { transactionHistory, totalGrossRevenue, totalExpenses, netProfit } from "@/data/revenue";
import { FaArrowLeft, FaChartLine, FaLaptopCode, FaMobileAlt, FaYoutube, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function RevenuePage() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate 1000 hexagon positions in a circular honeycomb
  const hexagons = useMemo(() => {
    const hexCount = 1000;
    const items = [];
    const size = 12; 
    const spacingX = size * 1.5;
    const spacingY = size * Math.sqrt(3);
    
    const gridSize = 45; 
    for (let r = -gridSize; r <= gridSize; r++) {
      for (let c = -gridSize; c <= gridSize; c++) {
        const x = c * spacingX;
        const y = r * spacingY + (c % 2 === 0 ? 0 : spacingY / 2);
        const dist = Math.sqrt(x * x + y * y);
        items.push({ x, y, dist });
      }
    }

    return items
      .sort((a, b) => a.dist - b.dist)
      .slice(0, hexCount);
  }, []);

  // Grid follows Gross Revenue for the "Gross Million" milestone
  const filledCount = Math.floor(totalGrossRevenue / 1000);

  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-5xl mx-auto cursor-none">
      {/* Bee Cursor */}
      <div 
        className="bee-cursor animate-bee text-2xl flex items-center justify-center pointer-events-none"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        🐝
      </div>

      <Link href="/" className="inline-flex items-center gap-2 text-cta font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
        <FaArrowLeft /> Back to Mission
      </Link>

      <div className="mb-16 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none text-foreground">
          REVENUE <br className="hidden sm:block" /> <span className="text-cta">TRACKER</span>.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium leading-tight">
          Tracking the marathon to a Net Million. Full transparency on every dollar in and out.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-fade-up opacity-0 stagger-2">
        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-6 rounded-[2rem] text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block mb-2">Gross Revenue</span>
          <span className="text-3xl font-black text-cta">${totalGrossRevenue.toLocaleString()}</span>
        </div>
        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-6 rounded-[2rem] text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block mb-2">Total Expenses</span>
          <span className="text-3xl font-black text-red-500">${totalExpenses.toLocaleString()}</span>
        </div>
        <div className="bg-cta/5 backdrop-blur-md border border-cta/20 p-6 rounded-[2rem] text-center text-foreground">
          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block mb-2">Net Profit</span>
          <span className={`text-3xl font-black ${netProfit < 0 ? 'text-red-500' : 'text-amber-500'}`}>
            ${netProfit.toLocaleString()}
          </span>
        </div>
        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-6 rounded-[2rem] text-center text-foreground">
          <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block mb-2">Net Goal</span>
          <span className="text-3xl font-black text-foreground/80">$1,000,000</span>
        </div>
      </div>

      {/* Honeycomb Circle Grid */}
      <div className="mb-20 p-8 md:p-12 bg-primary/10 backdrop-blur-md border border-secondary/40 rounded-[3rem] animate-fade-up opacity-0 stagger-3 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">The Gross Million Grid</h3>
            <p className="text-sm text-foreground/40 font-medium uppercase tracking-widest">Each hexagon represents $1,000 in Gross Revenue</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black text-amber-500 italic">
              {filledCount}<span className="text-foreground/20"> / 1000</span>
            </span>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center scale-[0.4] sm:scale-[0.6] md:scale-100">
            {hexagons.map((hex, i) => (
              <div 
                key={i} 
                className={`hexagon absolute w-6 h-6 transition-all duration-700 ${
                  i < filledCount 
                    ? 'bg-amber-500 honey-glow z-10' 
                    : 'bg-secondary/30 border border-foreground/5'
                }`}
                style={{ 
                  left: `calc(50% + ${hex.x}px)`, 
                  top: `calc(50% + ${hex.y}px)`,
                  marginLeft: '-12px',
                  marginTop: '-12px'
                }}
                title={`$${(i + 1) * 1000}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Transaction Timeline */}
      <div className="space-y-4 animate-fade-up opacity-0 stagger-3">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40 mb-8 ml-2">Transaction History</h3>
        {transactionHistory.slice().reverse().map((entry) => (
          <div key={entry.id} className="bg-primary/10 backdrop-blur-md border border-secondary/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-cta/30 transition-all group">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all ${
                entry.type === 'revenue' ? 'bg-cta/10 text-cta' : 'bg-red-500/10 text-red-500'
              }`}>
                {entry.type === 'revenue' ? <FaPlusCircle /> : <FaMinusCircle />}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{entry.date}</span>
                <h4 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">{entry.description}</h4>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground/40 uppercase tracking-widest">
                  <span className="opacity-50">
                    {entry.source === "Freelancing" && <FaLaptopCode className="inline mr-1" />}
                    {entry.source === "Apps" && <FaMobileAlt className="inline mr-1" />}
                    {entry.source === "Content" && <FaYoutube className="inline mr-1" />}
                    {entry.source === "Other" && <FaChartLine className="inline mr-1" />}
                  </span>
                  {entry.source}
                </div>
              </div>
            </div>
            <div className={`text-3xl md:text-4xl font-black italic ${
              entry.type === 'revenue' ? 'text-cta' : 'text-red-500'
            }`}>
              {entry.type === 'revenue' ? '+' : '-'}${entry.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Net Million Progress */}
      <div className="mt-20 p-10 md:p-16 bg-cta/5 backdrop-blur-md border border-cta/20 rounded-[3rem] text-center relative overflow-hidden animate-fade-up opacity-0 stagger-4">
        <div className="absolute top-0 left-0 w-full h-1 bg-cta/20"></div>
        <h3 className="text-2xl md:text-4xl font-black uppercase mb-4 text-cta">The Net Million Journey</h3>
        <p className="text-lg text-foreground/60 font-medium max-w-xl mx-auto mb-10">
          Revenue is vanity, profit is sanity. Here is the progress towards a true $1,000,000 net profit.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-end mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 text-left">Current Net: ${netProfit.toLocaleString()}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-cta text-right">Goal: $1,000,000</span>
          </div>
          <div className="w-full h-4 bg-foreground/5 rounded-full overflow-hidden p-1 border border-foreground/10">
            <div 
              className="h-full bg-cta rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)]" 
              style={{ width: `${Math.min(100, Math.max(0, (netProfit / 1000000) * 100))}%` }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}