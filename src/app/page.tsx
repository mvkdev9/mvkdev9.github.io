import { socials } from '@/data/socials';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  const {instagram } = socials;
  return (
    <main className="min-h-screen bg-white text-black p-6">
      {/* Hero Section */}
      
      <section className="text-center pb-20 max-w-4xl mx-auto flex flex-col gap-1 items-center">
         <Image
          src="/images/profile-bg.png"
          alt="MVK Dev"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;m on a mission to earn <span className="text-purple-700">$1,000,000</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          By building 100 mobile apps, freelance and sharing every step of the journey on social media.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/goals"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            Track My Goals
          </Link>
          <a
            href={instagram.url}
            target="_blank"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Why this mission?</h2>
        <p className="text-gray-600">
          I&apos;m a developer with a big dream — to earn a million dollars by creating
          real value through apps and content. This isn&apos;t about shortcuts. It&apos;s about showing what&apos;s
          possible with focus, consistency, and creativity.
        </p>
      </section>

      {/* How Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">How I&apos;ll achieve this</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">💡 Build 100 Mobile Apps</h3>
            <p className="text-gray-600">Small, useful apps - launched fast and improved iteratively.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">📸 Share the Journey</h3>
            <p className="text-gray-600">YouTube, Instagram, X - posting every progress, learning, and challenge.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">💬 Inspire Others</h3>
            <p className="text-gray-600">Documenting everything to help other indie devs and dreamers.</p>
          </div>
        </div>
      </section>
    </main>
  )
}