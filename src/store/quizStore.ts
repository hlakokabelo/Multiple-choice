import { create } from "zustand";
import { QUESTION_SETS } from "../data/questions";
import type { Question, QuestionSet } from "../types";

interface QuizState {
  questionSets: QuestionSet[];
  activeSetId: string | null;
  /** Denormalized for a stable reference — equals active set's questions. */
  questions: Question[];
  currentIndex: number;
  answers: Record<string, number>;
  isFinished: boolean;

  chooseSet: (id: string) => void;
  exitSet: () => void;
  selectAnswer: (questionId: string, optionIndex: number) => void;
  next: () => void;
  prev: () => void;
  restart: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questionSets: QUESTION_SETS,
  activeSetId: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  isFinished: false,

  chooseSet: (id) => {
    const found = get().questionSets.find((s) => s.id === id);
    if (!found) return;
    set({
      activeSetId: id,
      questions: found.questions,
      currentIndex: 0,
      answers: {},
      isFinished: false,
    });
  },

  exitSet: () =>
    set({
      activeSetId: null,
      questions: [],
      currentIndex: 0,
      answers: {},
      isFinished: false,
    }),

  selectAnswer: (questionId, optionIndex) =>
    set((state) =>
      state.answers[questionId] !== undefined
        ? state
        : { answers: { ...state.answers, [questionId]: optionIndex } },
    ),

  next: () => {
    const { currentIndex, isFinished, questions } = get();
    if (isFinished) return;
    if (currentIndex >= questions.length - 1) set({ isFinished: true });
    else set({ currentIndex: currentIndex + 1 });
  },

  prev: () => {
    const { currentIndex, isFinished, questions } = get();
    if (isFinished) {
      set({ isFinished: false, currentIndex: questions.length - 1 });
      return;
    }
    if (currentIndex > 0) set({ currentIndex: currentIndex - 1 });
  },

  restart: () => set({ currentIndex: 0, answers: {}, isFinished: false }),
}));
