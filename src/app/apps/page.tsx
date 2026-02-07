import { FaCode, FaTools } from 'react-icons/fa';

const appsInProgress = [
  {
    name: "Focus Hero",
    description: "A gamified productivity app where users level up by completing real-life tasks.",
    status: "In Development",
    tools: ["Flutter", "Firebase"],
    icon: <FaTools className="text-cta" />
  },
  {
    name: "FitTrack",
    description: "Track fitness goals, monitor progress, and join challenges with friends.",
    status: "Planning",
    tools: ["React Native", "Supabase"],
    icon: <FaCode className="text-cta" />
  },
  {
    name: "Mind Daily",
    description: "A simple journaling and meditation app to track your emotional health.",
    status: "Idea",
    tools: ["Flutter", "SQLite"],
    icon: <FaTools className="text-cta" />
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-24 animate-fade-up opacity-0 stagger-1">
        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 leading-none">
          THE <span className="text-cta">100</span> <br className="hidden sm:block" /> 
          APPS.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium leading-tight">
          One hundred products. One massive learning loop. Witness the evolution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {appsInProgress.map((app, idx) => (
          <div key={idx} className={`bg-primary/30 backdrop-blur-md border border-secondary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] hover:border-cta transition-all group animate-fade-up opacity-0 stagger-${(idx % 4) + 1}`}>
            <div className="flex justify-between items-start mb-8 md:mb-10">
              <div className="bg-cta/10 p-4 md:p-5 rounded-xl md:rounded-2xl text-2xl md:text-3xl text-cta">
                {app.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 bg-secondary rounded-full border border-secondary text-foreground/60">
                {app.status}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 group-hover:text-cta transition-colors uppercase tracking-tight text-foreground">{app.name}</h2>
            <p className="text-base md:text-lg text-foreground/60 mb-6 md:mb-8 font-medium leading-snug">
              {app.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {app.tools.map(tool => (
                <span key={tool} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-foreground/5 rounded-lg text-foreground/40 border border-foreground/5">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-primary/10 border border-secondary border-dashed p-10 rounded-[3rem] flex flex-col items-center justify-center text-center opacity-40 animate-fade-up opacity-0 stagger-4">
          <div className="text-6xl font-black text-foreground/20 mb-4 italic">#4</div>
          <p className="text-foreground/40 font-black uppercase tracking-[0.3em] text-xs">Awaiting Build</p>
        </div>
      </div>
    </main>
  );
}