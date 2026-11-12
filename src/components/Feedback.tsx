interface FeedbackProps {
  isCorrect: boolean;
  correctLetter: string;
  explanation?: string;
}

export default function Feedback({
  isCorrect,
  correctLetter,
  explanation,
}: FeedbackProps) {
  return (
    <div
      className={`mt-4 rounded-xl border px-4 py-3 text-[15px] ${
        isCorrect
          ? "border-green-500/40 bg-green-500/10"
          : "border-red-500/40 bg-red-500/10"
      }`}
    >
      <p className="font-semibold">
        {isCorrect
          ? "✅ Correct"
          : `❌ Not quite — the answer is ${correctLetter}`}
      </p>
      {explanation && (
        <p className="mt-1 text-sm leading-relaxed text-slate-400">
          {explanation}
        </p>
      )}
    </div>
  );
}
