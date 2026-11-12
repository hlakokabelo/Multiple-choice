import { useQuizStore } from "../store/quizStore";

export default function Header() {
  const questions = useQuizStore((s) => s.questions);
  const answers = useQuizStore((s) => s.answers);
  const exitSet = useQuizStore((s) => s.exitSet);

  const answered = Object.keys(answers).length;
  const correct = questions.filter((q) => answers[q.id] === q.correct).length;

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-lg font-semibold">AI-901 Practice</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-400">
          {answered > 0 ? `${correct}/${answered} correct` : ""}
        </span>
        <button
          type="button"
          onClick={exitSet}
          className="text-sm text-sky-400 hover:text-sky-300"
        >
          Change set
        </button>
      </div>
    </header>
  );
}
