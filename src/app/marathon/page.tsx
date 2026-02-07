import { FaArrowLeft, FaHistory, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

export default function MarathonPage() {
  const milestones = [
    { title: "Run 3x/week", status: "In Progress", color: "#F97316" },
    { title: "First 10K", status: "Upcoming", color: "#F97316" },
    { title: "Half Marathon", status: "Upcoming", color: "#F97316" },
    { title: "Full Marathon", status: "Upcoming", color: "#F97316" },
  ];

  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
      <Link href="/goals" className="inline-flex items-center gap-2 text-cta font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
        <FaArrowLeft /> Back to Plan
      </Link>

      <div className="mb-16 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none text-foreground">
          THE <span className="text-cta">RUN</span>.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium leading-tight">
          42.2 kilometers of raw discipline. Training the body to match the ambition of the mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-8 md:p-12 rounded-[3rem] animate-fade-up opacity-0 stagger-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-cta/10 text-cta rounded-2xl flex items-center justify-center text-2xl">
              <FaCalendarCheck />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Training Habits</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-foreground/60 font-bold uppercase text-xs tracking-widest">Consistency (30 Days)</span>
              <span className="text-2xl font-black italic text-foreground">0%</span>
            </div>
            <div className="w-full h-3 bg-foreground/5 rounded-full overflow-hidden p-0.5 border border-foreground/10">
              <div className="h-full bg-cta rounded-full w-[0%]"></div>
            </div>
          </div>
        </div>

        <div className="bg-primary/20 backdrop-blur-md border border-secondary p-8 md:p-12 rounded-[3rem] animate-fade-up opacity-0 stagger-3">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-cta/10 text-cta rounded-2xl flex items-center justify-center text-2xl">
              <FaHistory />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Total Distance</h3>
          </div>
          <div className="text-6xl font-black italic text-foreground text-foreground">0<span className="text-foreground/20 text-3xl"> KM</span></div>
          <p className="mt-4 text-foreground/40 font-bold uppercase text-[10px] tracking-[0.2em]">Target: 42.2 KM</p>
        </div>
      </div>

      <div className="space-y-4 animate-fade-up opacity-0 stagger-4">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40 mb-8 ml-4">The Road to Glory</h3>
        {milestones.map((m, i) => (
          <div key={i} className="bg-primary/10 backdrop-blur-md border border-secondary/40 p-6 md:p-8 rounded-[2rem] flex justify-between items-center group hover:border-cta transition-all">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full border-2 border-foreground/10 flex items-center justify-center text-foreground/20 font-black italic">
                {i + 1}
              </div>
              <h4 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">{m.title}</h4>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-secondary rounded-full text-foreground/40">
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}