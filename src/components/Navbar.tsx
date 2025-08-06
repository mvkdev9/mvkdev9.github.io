import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-600">
            <Link href="/">mvkdev</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/goals" className="hover:text-black">Goals</Link>
            <Link href="/apps" className="hover:text-black">Apps</Link>
            <Link href="/support" className="hover:text-black">Support</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;