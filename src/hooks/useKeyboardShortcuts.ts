import { useEffect } from "react";
import { LETTERS } from "../lib/letters";
import { useQuizStore } from "../store/quizStore";

const NUMBER_KEYS = ["1", "2", "3", "4", "5", "6"];

export function useKeyboardShortcuts() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const state = useQuizStore.getState();

      if (state.isFinished) {
        if (e.key === "Enter") state.restart();
        return;
      }

      const q = state.questions[state.currentIndex];
      if (!q) return;

      const answered = state.answers[q.id] !== undefined;
      const key = e.key.toLowerCase();

      let idx = LETTERS.findIndex((l) => l.toLowerCase() === key);
      if (idx === -1) idx = NUMBER_KEYS.indexOf(key);

      if (idx >= 0 && idx < q.options.length && !answered) {
        e.preventDefault();
        state.selectAnswer(q.id, idx);
        return;
      }

      if (e.key === "ArrowRight" && answered) state.next();
      if (e.key === "ArrowLeft") state.prev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}
