import { socials } from '@/data/socials';
import Link from 'next/link';
import { FaArrowRight, FaRocket, FaCode, FaChartLine, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Home() {

  return (

    <main className="min-h-screen pt-28 md:pt-40 pb-20 px-4 md:px-6">

      {/* Hero Section */}

      <section className="max-w-6xl mx-auto mb-20 md:mb-32 relative text-center md:text-left">

        <div className="inline-flex items-center gap-2 bg-primary/30 backdrop-blur-md border border-secondary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 md:mb-12 animate-fade-up opacity-0 stagger-1">

          <span className="relative flex h-2 w-2">

            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>

            <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>

          </span>

          Building App #1

        </div>

        

        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-extrabold tracking-tighter mb-8 md:mb-12 leading-[0.85] md:leading-[0.8] animate-fade-up opacity-0 stagger-2 uppercase">

          Mission: <br />

          <span className="text-cta italic">$1,000,000</span>.

        </h1>

        

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end animate-fade-up opacity-0 stagger-3">

          <p className="text-lg md:text-2xl text-foreground/60 font-medium leading-tight max-w-lg mx-auto md:mx-0">

            I&apos;m MVK. I&apos;m on a relentless journey to earn a million dollars by building 100 mobile apps and a community of a million dreamers. No shortcuts. Just transparency.

          </p>

          

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <Link

              href="/goals"

              className="bg-cta text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(249,115,22,0.3)]"

            >

              TRACK PROGRESS <FaArrowRight />

            </Link>

            <Link

              href="/apps"

              className="border-2 border-secondary backdrop-blur-md px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-full font-black text-lg md:text-xl hover:bg-foreground hover:text-background transition-all flex items-center justify-center"

            >

              EXPLORE APPS

            </Link>

          </div>

        </div>

      </section>



      {/* Bento Grid Stats */}

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 animate-fade-up opacity-0 stagger-4">

                {/* Goal 2: 1M Revenue (Primary Focus - Moved First) */}

                <Link href="/revenue" className="md:col-span-7 bg-cta/5 backdrop-blur-md border border-cta/20 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between hover:border-cta transition-all group relative overflow-hidden cursor-pointer">

                  <div className="absolute top-0 right-0 w-64 h-64 bg-cta/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-cta/10 transition-colors"></div>

                  <div>

                    <div className="bg-cta/10 text-cta w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 text-2xl md:text-3xl group-hover:scale-110 transition-transform">

                      <FaChartLine />

                    </div>

                    <h3 className="text-3xl md:text-5xl font-black uppercase mb-2 md:mb-4 text-foreground">THE REVENUE</h3>

                    <p className="text-base md:text-xl text-foreground/60 max-w-md font-medium leading-tight">My absolute focus. Scaling from -$30K to a million-dollar business with full transparency.</p>

                  </div>

                  <div className="mt-12 md:mt-20">

                    <div className="flex justify-between items-end mb-4">

                      <span className="text-4xl md:text-6xl font-black italic text-red-500">-$30K<span className="text-foreground/20 text-xl md:text-3xl"> / $1M</span></span>

                      <span className="text-cta font-black text-lg md:text-2xl tracking-tighter uppercase">Goal: $1M</span>

                    </div>

                    <div className="w-full h-4 md:h-6 bg-red-500/10 rounded-full overflow-hidden p-0.5 md:p-1 border border-red-500/20">

                      <div className="h-full bg-red-500 rounded-full w-[0%] shadow-[0_0_20px_rgba(239,68,68,0.5)]"></div>

                    </div>

                  </div>

                </Link>



        {/* Goal 1: 100 Apps */}

        <div className="md:col-span-5 bg-primary/30 backdrop-blur-md border border-secondary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between hover:border-cta transition-all group">

          <div>

            <div className="bg-cta/10 text-cta w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 text-2xl md:text-3xl group-hover:rotate-6 transition-transform">

              <FaCode />

            </div>

            <h3 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-4 text-foreground">100 APPS</h3>

            <p className="text-base md:text-lg text-foreground/60 font-medium leading-tight">The vehicle for wealth. Mastering execution by shipping 100 products.</p>

          </div>

          <div className="mt-10 md:mt-12">

            <div className="flex justify-between items-end mb-3 md:mb-4">

              <span className="text-3xl md:text-4xl font-black italic text-foreground">0<span className="text-foreground/40 text-xl md:text-2xl">/100</span></span>

            </div>

            <div className="w-full h-3 md:h-4 bg-secondary rounded-full overflow-hidden p-0.5 border border-secondary">

              <div className="h-full bg-cta rounded-full w-[2%] shadow-[0_0_15px_rgba(249,115,22,0.4)]"></div>

            </div>

          </div>

        </div>



        {/* Goal 3: 1M Community */}

        <div className="md:col-span-5 bg-cta/5 backdrop-blur-md border border-cta/20 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between hover:border-cta transition-all group">

          <div>

            <div className="bg-cta/10 text-cta w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 text-2xl md:text-3xl">

              <FaRocket />

            </div>

            <h3 className="text-2xl md:text-4xl font-black uppercase mb-2 md:mb-4 text-foreground">1M TRIBE</h3>

            <p className="text-base md:text-lg text-foreground/60 font-medium leading-tight">Building a network of developers and indie hackers along the way.</p>

          </div>

          <div className="mt-10 md:mt-12 text-5xl md:text-7xl font-black italic text-cta">

            0<span className="text-foreground/40 text-2xl md:text-3xl">/1M</span>

          </div>

        </div>



        {/* Social Card */}

        <div className="md:col-span-7 bg-secondary/30 backdrop-blur-md border border-secondary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] flex flex-col sm:flex-row items-start sm:items-center justify-between group overflow-hidden relative gap-6">

           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <div>

            <h3 className="text-3xl md:text-4xl font-black uppercase mb-1 md:mb-2 text-foreground">The Saga</h3>

            <p className="text-lg md:text-xl text-foreground/60 font-medium">Watch every dollar earned on socials.</p>

          </div>

                    <div className="flex gap-3 md:gap-4 w-full sm:w-auto">

                      <a href={socials.youtube.url} target="_blank" className="flex-1 sm:flex-none bg-foreground text-background p-4 md:p-6 rounded-2xl md:rounded-3xl hover:bg-[#FF0000] hover:text-white hover:-translate-y-2 transition-all flex justify-center items-center">

                        <FaYoutube className="text-2xl md:text-3xl" />

                      </a>

                      <a href={socials.instagram.url} target="_blank" className="flex-1 sm:flex-none bg-foreground text-background p-4 md:p-6 rounded-2xl md:rounded-3xl hover:bg-cta hover:text-white hover:-translate-y-2 transition-all flex justify-center items-center">

                        <FaInstagram className="text-2xl md:text-3xl" />

                      </a>

                       <a href={socials.twitter.url} target="_blank" className="flex-1 sm:flex-none bg-foreground text-background p-4 md:p-6 rounded-2xl md:rounded-3xl hover:bg-[#1DA1F2] hover:text-white hover:-translate-y-2 transition-all flex justify-center items-center">

                        <FaTwitter className="text-2xl md:text-3xl" />

                      </a>

                    </div>

        </div>

      </section>


            </main>
          );
        }