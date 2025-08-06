// app/goals/page.tsx
import fs from 'fs';
import path from 'path';

type Goal = {
  id: number;
  title: string;
  description: string;
  progress: number;
  subtasks: string[];
};

export default function GoalsPage() {
  const filePath = path.join(process.cwd(), '/src/data/goals.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const goals: Goal[] = JSON.parse(fileContent);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">🎯 My Life Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="border rounded-xl shadow p-4 bg-white dark:bg-gray-900"
          >
            <h2 className="text-2xl font-semibold">{goal.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {goal.description}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            <ul className="text-sm list-disc list-inside">
              {goal.subtasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}