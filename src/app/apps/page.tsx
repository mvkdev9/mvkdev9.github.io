const appsInProgress = [
  {
    name: "Focus Hero",
    description: "A gamified productivity app where users level up by completing real-life tasks.",
    status: "In Progress",
    tools: ["Flutter", "Firebase"],
  },
  {
    name: "FitTrack",
    description: "Track fitness goals, monitor progress, and join challenges with friends.",
    status: "In Progress",
    tools: ["React Native", "Supabase"],
  },
  {
    name: "Mind Daily",
    description: "A simple journaling and meditation app to track your emotional health.",
    status: "In Progress",
    tools: ["Flutter", "SQLite"],
  },
];

export default function AppsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">🚧 Building 100 Mobile Apps</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        I&apos;m currently building 100 mobile apps as part of my journey to learn, grow, and create impact.
        Below are some of the apps in progress. Follow me to stay updated!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {appsInProgress.map((app, idx) => (
          <div key={idx} className="p-4 rounded-xl shadow bg-white dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-1">{app.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{app.description}</p>
            <div className="text-sm text-gray-400 mb-1">
              Tools: {app.tools.join(", ")}
            </div>
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100">
              {app.status}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        New apps added every week. Thanks for your support!
      </p>
    </main>
  );
}