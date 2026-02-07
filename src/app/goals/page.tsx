import { goals } from "@/data/goals";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface Goal {
  id: number;
  title: string;
  description: string;
  href: string;
  color: string;
  icon: React.ElementType;
  progress: number;
  subtasks: string[];
  wins?: string[];
}

export default function GoalsPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none text-foreground">
          THE <span className="text-cta">MASTER</span> <br className="hidden sm:block" /> PLAN.
        </h1>
        <p className="text-lg md:text-2xl text-foreground/60 max-w-3xl font-medium leading-tight">
          Full transparency. Click to explore the milestones and confirmed wins for each objective.
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {(goals as Goal[]).map((goal, idx) => {
          const Icon = goal.icon;
          return (
            <details
              key={goal.id}
              className={`bg-primary/20 backdrop-blur-md border border-secondary rounded-[1.5rem] md:rounded-[2.5rem] hover:border-cta/50 transition-all group animate-fade-up opacity-0 stagger-${(idx % 4) + 1} overflow-hidden`}
            >
              <summary className="list-none cursor-pointer p-6 md:p-10 outline-none">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between">
                  <div className="flex gap-5 md:gap-8 items-center flex-1">
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shrink-0 shadow-2xl transition-transform group-open:scale-90"
                      style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
                    >
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-cta transition-colors">
                          {goal.title}
                        </h3>
                        <FaChevronDown className="text-foreground/20 group-open:rotate-180 transition-transform md:hidden" />
                      </div>
                      <p className="text-sm md:text-lg text-foreground/60 font-medium line-clamp-1 group-open:line-clamp-none">
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-1/3 flex items-center gap-6">
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Progress</span>
                        <span className="text-lg md:text-xl font-black italic" style={{ color: goal.color }}>{goal.progress}%</span>
                      </div>
                      <div className="w-full h-2 md:h-3 bg-foreground/5 rounded-full overflow-hidden p-0.5 border border-foreground/10">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${goal.progress}%`, 
                            backgroundColor: goal.color 
                          }}
                        />
                      </div>
                    </div>
                    <FaChevronDown className="text-foreground/20 group-open:rotate-180 transition-transform hidden md:block" />
                  </div>
                </div>
              </summary>

              <div className="px-6 pb-6 md:px-10 md:pb-10 pt-0">
                <div className="pt-8 md:pt-10 border-t border-secondary grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-4 md:mb-6">The Milestones</h4>
                    <ul className="space-y-3 md:space-y-4">
                      {goal.subtasks.map((task, i) => (
                        <li key={i} className="flex items-center gap-4 text-base md:text-lg font-medium text-foreground/80">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          {task}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={goal.href} 
                      className="inline-flex items-center gap-2 mt-8 bg-cta text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.2)]"
                    >
                      View Live Tracker <FaExternalLinkAlt />
                    </Link>
                  </div>
                  {goal.wins && goal.wins.length > 0 && (
                    <div className="bg-cta/5 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-cta/10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cta mb-4 md:mb-6">Confirmed Wins</h4>
                      <ul className="space-y-3 md:space-y-4">
                        {goal.wins.map((win, i) => (
                          <li key={i} className="flex items-center gap-4 text-base md:text-lg font-black italic text-foreground">
                            <div className="w-2 h-2 rounded-full bg-cta" />
                            {win}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}