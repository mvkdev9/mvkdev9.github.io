import { socials } from '@/data/socials';
import { FaCoffee, FaHeart, FaShareAlt } from 'react-icons/fa';

interface Socials {
  instagram: { username: string; url: string };
  twitter: { username: string; url: string };
  youtube: { username: string; url: string };
  github: { username: string; url: string };
  email: string;
  buymeacoffee: { username: string; url: string };
}

export default function SupportPage() {
  const typedSocials = socials as Socials;

  return (

    <main className="min-h-screen pt-32 md:pt-48 pb-20 px-4 md:px-6 max-w-5xl mx-auto">

      <div className="text-center mb-16 md:mb-24 animate-fade-up opacity-0 stagger-1">

        <div className="bg-cta/10 text-cta w-20 h-20 md:w-24 md:h-24 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center text-4xl md:text-5xl mx-auto mb-8 md:mb-10 shadow-[0_0_50px_rgba(34,197,94,0.2)]">

          <FaHeart className="animate-pulse" />

        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-extrabold tracking-tighter mb-4 md:mb-6 uppercase leading-none">

          FUEL THE <br className="hidden sm:block" /> <span className="text-cta">MISSION</span>.

        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-tight">

          Building 100 products is a marathon. Your energy keeps the engine running.

        </p>

      </div>



            <div className="grid gap-6 md:gap-8">



              <div className="bg-primary/20 border border-secondary p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left hover:border-cta transition-all group animate-fade-up opacity-0 stagger-2">



                <div className="bg-cta/10 p-6 md:p-8 rounded-2xl md:rounded-3xl text-3xl md:text-4xl text-cta group-hover:rotate-12 transition-transform">



                  <FaShareAlt />



                </div>



                          <div>



                            <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 md:mb-3 tracking-tight text-foreground">Spread the Word</h3>



                            <p className="text-lg md:text-xl text-foreground/60 font-medium leading-snug">Attention is the ultimate currency. Follow and share the saga.</p>



                            <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">



                              <a href={typedSocials.youtube.url} target="_blank" className="text-cta font-black text-base md:text-lg uppercase tracking-widest hover:underline">YouTube</a>



                              <a href={typedSocials.instagram.url} target="_blank" className="text-cta font-black text-base md:text-lg uppercase tracking-widest hover:underline">Instagram</a>



                              <a href={typedSocials.twitter.url} target="_blank" className="text-cta font-black text-base md:text-lg uppercase tracking-widest hover:underline">Follow on X</a>



                            </div>



                          </div>



              </div>



      



              <div className="bg-cta/5 border border-cta/20 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left hover:border-cta transition-all group animate-fade-up opacity-0 stagger-3">



                <div className="bg-cta/10 p-6 md:p-8 rounded-2xl md:rounded-3xl text-3xl md:text-4xl text-cta group-hover:scale-110 transition-transform">



                  <FaCoffee />



                </div>



                <div className="flex-1">



                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 md:mb-3 tracking-tight text-foreground">Buy Me a Coffee</h3>



                  <p className="text-lg md:text-xl text-foreground/60 font-medium leading-snug">Fuel the late-night ship cycles with a direct boost.</p>



                  <a href="#" className="inline-block mt-6 md:mt-8 bg-cta text-white px-8 py-3 md:px-12 md:py-4 rounded-xl md:rounded-full font-black text-lg md:text-xl hover:translate-y-[-4px] hover:shadow-[0_15px_30px_rgba(249,115,22,0.3)] transition-all uppercase tracking-tighter">



                    Support the Ship



                  </a>



                </div>



              </div>



      



              <div className="bg-secondary/30 border border-secondary p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-center animate-fade-up opacity-0 stagger-4">



                <h3 className="text-xl md:text-2xl font-black uppercase mb-2 tracking-widest text-foreground">High Impact?</h3>



                <p className="text-lg md:text-xl text-foreground/40 mb-6 md:mb-8 font-medium">Need a specialized product built? Let&apos;s talk business.</p>



                <a href={`mailto:${typedSocials.email}`} className="text-2xl md:text-4xl font-black italic text-cta hover:text-foreground transition-colors underline decoration-secondary">



                  {typedSocials.email}



                </a>



              </div>



            </div>

    </main>

  );

}