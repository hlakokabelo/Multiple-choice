import { useQuizStore } from "../store/quizStore";

export default function ProgressBar() {
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const isFinished = useQuizStore((s) => s.isFinished);
  const total = useQuizStore((s) => s.questions.length);

  const pct = isFinished
    ? 100
    : total === 0
      ? 0
      : ((currentIndex + 1) / total) * 100;

  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-sky-400 transition-[width] duration-300 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
