import { useQuizStore } from "../store/quizStore";

export default function Navigation() {
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const questions = useQuizStore((s) => s.questions);
  const isFinished = useQuizStore((s) => s.isFinished);
  const answers = useQuizStore((s) => s.answers);
  const next = useQuizStore((s) => s.next);
  const prev = useQuizStore((s) => s.prev);
  const restart = useQuizStore((s) => s.restart);

  const currentQuestion = questions[currentIndex];
  const answered = currentQuestion
    ? answers[currentQuestion.id] !== undefined
    : false;
  const isLast = currentIndex === questions.length - 1;

  const prevDisabled = !isFinished && currentIndex === 0;
  const nextDisabled = !isFinished && !answered;
  const nextLabel = isFinished ? "Restart" : isLast ? "See results" : "Next →";

  const handleNext = () => {
    if (isFinished) restart();
    else next();
  };

  return (
    <div className="flex gap-2.5">
      <button
        type="button"
        onClick={prev}
        disabled={prevDisabled}
        className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3.5 text-base text-slate-200 transition-colors enabled:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Back
      </button>
      <button
        type="button"
        onClick={handleNext}
        disabled={nextDisabled}
        className="flex-1 rounded-xl bg-sky-400 px-4 py-3.5 text-base font-semibold text-sky-950 transition-colors enabled:hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {nextLabel}
      </button>
    </div>
  );
}
