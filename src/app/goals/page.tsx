// app/goals/page.tsx
import { goals } from "@/data/goals";

type Goal = {
  id: number;
  title: string;
  description: string;
  progress: number;
  subtasks: string[];
  wins?: string[];
  color: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  secondaryIcon?: React.ComponentType<{ size?: number; color?: string }>;
};

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
     
      <p className="text-4xl font-bold mb-8 text-center"> 🎯 Long Term Goals</p>
      {goals.map(
        ({
          color,
          id,
          icon: Icon,
          secondaryIcon: SecondaryIcon,
          title,
          progress,
          description,
          subtasks,
          wins,
        }: Goal) => {
          return (
            <details
              key={id}
              className="p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <summary className="flex flex-col md:flex-row items-center gap-4 justify-between ">
                <div className="flex items-center gap-4">
                  <Icon size={32} color={color} />
                  {SecondaryIcon && <SecondaryIcon size={28} color={color} />}
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="w-full h-3 bg-gray-200 rounded-full min-w-[65vw] md:min-w-100 ">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: color,
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {progress}%
                  </span>
                </div>
              </summary>
              <div className="p-6 space-y-4">
                <p className="text-gray-700">{description}</p>
                <ul className="list-disc pl-6 space-y-2">
                  {subtasks.map((subtask, index) => (
                    <li key={index} className="text-gray-600 italic">
                      {subtask}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700">Progress</p>
                {!wins &&( <p className="text-gray-500 italic">No progress yet.</p>)}
                <ul className="list-disc pl-6 space-y-2">
                  {wins?.map((win, index) => (
                    <li key={index} className="text-gray-600 italic">
                      {win}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        }
      )}
    </main>
  );
}
