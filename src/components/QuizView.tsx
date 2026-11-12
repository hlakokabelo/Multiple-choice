import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useQuizStore } from "../store/quizStore";
import Header from "./Header";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import Results from "./Results";

export default function QuizView() {
  useKeyboardShortcuts();
  const isFinished = useQuizStore((s) => s.isFinished);

  return (
    <>
      <Header />
      <ProgressBar />
      <main className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
        {isFinished ? <Results /> : <QuestionCard />}
      </main>
      <Navigation />
    </>
  );
}
