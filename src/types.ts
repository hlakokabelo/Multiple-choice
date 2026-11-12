export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface QuestionSet {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}
