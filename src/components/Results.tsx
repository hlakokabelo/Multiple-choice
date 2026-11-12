import { useQuizStore } from "../store/quizStore";

export default function Results() {
  const questions = useQuizStore((s) => s.questions);
  const answers = useQuizStore((s) => s.answers);

  const total = questions.length;
  const correct = questions.filter((q) => answers[q.id] === q.correct).length;
  const answered = Object.keys(answers).length;
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100);

  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
        Results
      </p>
      <p className="text-4xl font-bold leading-none text-sky-400">
        {correct} <span className="text-slate-500">/ {total}</span>
      </p>
      <p className="mt-2 text-sm text-slate-400">
        {pct}% correct · {answered} answered
      </p>
      <p className="mt-1 text-sm text-slate-400">
        {pct >= 70
          ? "Nice work — keep the streak going."
          : "Review the missed ones and try again."}
      </p>
    </div>
  );
}
