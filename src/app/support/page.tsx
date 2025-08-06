export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">🙏 Support My Journey</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        I&apos;m on a mission to build 100 apps, become a successful freelancer, and inspire others by sharing my story every day.
        Your support helps fuel this journey and makes a real difference!
      </p>

      <section className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">1. Follow & Share</h2>
          <p>Spread the word by following me and sharing my content on social media.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">2. Donate 💸</h2>
          <p>Help financially via UPI, PayPal, or BuyMeACoffee.</p>
          <ul className="mt-2 list-disc list-inside">
            <li>UPI: <code>coming soon</code></li>
            <li>PayPal: <a href="#" className="text-blue-500">coming soon</a></li>
            <li><a href="#" className="text-yellow-500">coming soon</a></li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-2xl font-semibold">3. Write a Testimonial 💬</h2>
          <p>If I&apos;ve helped you in any way, please write a testimonial or tweet tagging me.</p>
        </div>
      </section>
    </main>
  );
}