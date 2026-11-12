import QuizView from "./components/QuizView";
import SetPicker from "./components/SetPicker";
import { useQuizStore } from "./store/quizStore";

export default function App() {
  const activeSetId = useQuizStore((s) => s.activeSetId);

  return (
    <div className="flex min-h-screen justify-center bg-slate-900 p-4 text-slate-200">
      <div className="flex w-full max-w-2xl flex-col gap-3.5 py-4">
        {activeSetId ? (
          <QuizView />
        ) : (
          <main className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
            <SetPicker />
          </main>
        )}
      </div>
    </div>
  );
}
