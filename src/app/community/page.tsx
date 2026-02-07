import { FaArrowLeft, FaYoutube, FaInstagram, FaTwitter, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function CommunityPage() {
  const stats = [
    { platform: "YouTube", count: "0", total: "1M", color: "#FF0000", icon: <FaYoutube /> },
    { platform: "Instagram", count: "0", total: "1M", color: "#E1306C", icon: <FaInstagram /> },
    { platform: "X / Twitter", count: "0", total: "1M", color: "#1DA1F2", icon: <FaTwitter /> },
  ];

  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-5xl mx-auto">
      <Link href="/goals" className="inline-flex items-center gap-2 text-cta font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
        <FaArrowLeft /> Back to Plan
      </Link>

      <div className="mb-16 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none text-foreground">
          THE <span className="text-cta">TRIBE</span>.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium leading-tight">
          Building a community of a million dreamers. Real growth, real impact, real connections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((s, i) => (
          <div key={i} className="bg-primary/20 backdrop-blur-md border border-secondary p-8 rounded-[2rem] hover:border-cta transition-all group animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform" style={{ color: s.color }}>
              {s.icon}
            </div>
            <h3 className="text-xl font-black uppercase mb-1"> {s.platform}</h3>
            <div className="flex justify-between items-end">
              <span className="text-4xl font-black text-foreground">{s.count}</span>
              <span className="text-foreground/20 font-bold uppercase text-[10px] tracking-widest mb-1">Goal: {s.total}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-10 md:p-16 bg-cta/5 backdrop-blur-md border border-cta/20 rounded-[3rem] text-center animate-fade-up opacity-0 stagger-4">
        <div className="w-20 h-20 bg-cta/10 text-cta rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-2xl">
          <FaUsers />
        </div>
        <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 text-foreground">Total Reach: 0</h3>
        <p className="text-lg text-foreground/60 font-medium max-w-xl mx-auto mb-10">
          The goal isn&apos;t just numbers—it&apos;s about creating a movement of indie hackers who build the future.
        </p>
        <div className="w-full h-4 bg-foreground/5 rounded-full overflow-hidden p-1 border border-foreground/10 max-w-2xl mx-auto">
          <div className="h-full bg-cta rounded-full w-[0.1%] shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
        </div>
      </div>
    </main>
  );
}