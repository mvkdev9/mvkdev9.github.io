import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[90%] max-w-5xl">
      <div className="bg-primary/60 backdrop-blur-xl border border-foreground/10 rounded-2xl px-5 py-3 md:px-8 md:py-4 flex justify-between items-center shadow-xl">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter hover:scale-105 transition-transform group text-foreground">
          MVK<span className="text-cta group-hover:animate-pulse">.</span>DEV
        </Link>
        
        <div className="flex items-center gap-4 md:gap-10 text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground">
          <Link href="/apps" className="hover:text-cta transition-colors relative group hidden sm:block">
            Apps
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/goals" className="hover:text-cta transition-colors relative group hidden sm:block">
            Goals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta transition-all group-hover:w-full"></span>
          </Link>
          
          <Link href="/apps" className="sm:hidden hover:text-cta transition-colors">Apps</Link>
          <Link href="/goals" className="sm:hidden hover:text-cta transition-colors">Goals</Link>

          <Link href="/support" className="bg-cta text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;