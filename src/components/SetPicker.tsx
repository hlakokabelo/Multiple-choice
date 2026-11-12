import { useQuizStore } from "../store/quizStore";

export default function SetPicker() {
  const sets = useQuizStore((s) => s.questionSets);
  const chooseSet = useQuizStore((s) => s.chooseSet);

  return (
    <div>
      <h2 className="mb-1 text-lg font-medium">
        Choose a question set for AI901
      </h2>

      <div className="space-y-2.5">
        {sets.map((set) => (
          <button
            key={set.id}
            type="button"
            onClick={() => chooseSet(set.id)}
            className="block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-left transition-colors hover:border-sky-400 hover:bg-slate-800"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium">{set.title}</span>
              <span className="shrink-0 text-xs text-slate-400">
                {set.questions.length} questions
              </span>
            </div>
            {set.description && (
              <p className="mt-1 text-sm text-slate-400">{set.description}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
