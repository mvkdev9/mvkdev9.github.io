import { FaArrowLeft, FaGlobeAmericas, FaMapMarkedAlt, FaCompass } from "react-icons/fa";
import Link from "next/link";

export default function TravelPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
      <Link href="/goals" className="inline-flex items-center gap-2 text-cta font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
        <FaArrowLeft /> Back to Plan
      </Link>

      <div className="mb-16 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none text-foreground">
          THE <span className="text-cta">EXPLORER</span>.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium leading-tight">
          Broadening horizons. From every corner of India to 10 countries across the globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-8 md:p-12 rounded-[3rem] animate-fade-up opacity-0 stagger-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-cta/10 text-cta rounded-2xl flex items-center justify-center text-2xl">
              <FaMapMarkedAlt />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Indian States</h3>
          </div>
          <div className="text-6xl font-black italic text-foreground text-foreground">0<span className="text-foreground/20 text-3xl"> / 28</span></div>
          <div className="mt-8 w-full h-3 bg-foreground/5 rounded-full overflow-hidden p-0.5 border border-foreground/10">
            <div className="h-full bg-cta rounded-full w-[0%] shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
          </div>
        </div>

        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-8 md:p-12 rounded-[3rem] animate-fade-up opacity-0 stagger-3">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-cta/10 text-cta rounded-2xl flex items-center justify-center text-2xl">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Global Countries</h3>
          </div>
          <div className="text-6xl font-black italic text-foreground text-foreground">0<span className="text-foreground/20 text-3xl"> / 10</span></div>
          <div className="mt-8 w-full h-3 bg-foreground/5 rounded-full overflow-hidden p-0.5 border border-foreground/10">
            <div className="h-full bg-cta rounded-full w-[0%] shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-16 bg-cta/5 backdrop-blur-md border border-cta/20 rounded-[3rem] text-center animate-fade-up opacity-0 stagger-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-[10rem] rotate-12">
          <FaCompass className="text-foreground" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 text-foreground">World Map Coming Soon</h3>
        <p className="text-lg text-foreground/60 font-medium max-w-xl mx-auto">
          I&apos;ll be documenting every trip with photos, stories, and cultural insights as I tick off each destination.
        </p>
      </div>
    </main>
  );
}