import { letterFor } from "../lib/letters";
import { useQuizStore } from "../store/quizStore";
import Feedback from "./Feedback";
import OptionButton from "./OptionButton";

export default function QuestionCard() {
  const currentIndex = useQuizStore((s) => s.currentIndex);
  const questions = useQuizStore((s) => s.questions);
  const answers = useQuizStore((s) => s.answers);
  const selectAnswer = useQuizStore((s) => s.selectAnswer);

  const q = questions[currentIndex];
  if (!q) return null;

  const selected = answers[q.id];
  const answered = selected !== undefined;

  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <h2 className="mb-5 text-lg font-medium leading-snug">{q.question}</h2>

      <div className="space-y-2.5">
        {q.options.map((opt, i) => {
          let status: "idle" | "correct" | "wrong" = "idle";
          if (answered) {
            if (i === q.correct) status = "correct";
            else if (i === selected) status = "wrong";
          }
          return (
            <OptionButton
              key={i}
              letter={letterFor(i)}
              text={opt}
              status={status}
              disabled={answered}
              onClick={() => selectAnswer(q.id, i)}
            />
          );
        })}
      </div>

      {answered && (
        <Feedback
          isCorrect={selected === q.correct}
          correctLetter={letterFor(q.correct)}
          explanation={q.explanation}
        />
      )}
    </div>
  );
}
