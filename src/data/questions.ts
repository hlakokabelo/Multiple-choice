import type { Question, QuestionSet } from "../types";

/**
 * Local data store. When you add a backend later, fetch the same shape
 * and feed it into the store instead of importing this constant.
 */
const set1: Question[] = [
  {
    id: "q1",
    question:
      "You need to build a model that detects whether a photo contains a bicycle. Which Azure AI service should you use?",
    options: [
      "Azure AI Vision",
      "Azure AI Language",
      "Azure AI Speech",
      "Azure AI Translator",
    ],
    correct: 0,
    explanation:
      "Image classification and object detection are computer vision workloads.",
  },
  {
    id: "q2",
    question:
      "Which service should you use to determine whether a customer review is positive or negative?",
    options: [
      "Azure AI Vision",
      "Azure AI Language",
      "Azure AI Speech",
      "Azure AI Translator",
    ],
    correct: 1,
    explanation:
      "Sentiment analysis is a natural language processing (text) workload.",
  },
  {
    id: "q3",
    question:
      "A model predicts the selling price of a house. What type of machine learning is this?",
    options: [
      "Classification",
      "Clustering",
      "Regression",
      "Anomaly detection",
    ],
    correct: 2,
    explanation:
      "Predicting a numeric value is regression; predicting a category is classification.",
  },
  {
    id: "q4",
    question: "Which service converts spoken audio into written text?",
    options: [
      "Azure AI Language",
      "Azure AI Vision",
      "Azure AI Search",
      "Azure AI Speech",
    ],
    correct: 3,
    explanation: "Speech-to-text is provided by Azure AI Speech.",
  },
  {
    id: "q5",
    question: "Why do you split data into training and validation sets?",
    options: [
      "To train on one set and evaluate on data the model has not seen",
      "To make the dataset smaller",
      "To increase the number of features",
      "To remove outliers automatically",
    ],
    correct: 0,
    explanation:
      "The validation set estimates how well the model generalizes to new data.",
  },
  {
    id: "q6",
    question:
      "In a classification model, what does the confidence score represent?",
    options: [
      "The number of features used",
      "The estimated probability that the predicted label is correct",
      "The time taken to train the model",
      "The size of the training dataset",
    ],
    correct: 1,
    explanation:
      "The confidence score is the model’s estimated probability for the predicted label.",
  },
];

const set2: Question[] = [
  {
    id: "s2q1",
    question: "What is the purpose of a confusion matrix?",
    options: [
      "To visualize model performance across classes",
      "To normalize input features",
      "To reduce the number of parameters",
      "To split data into folds",
    ],
    correct: 0,
    explanation:
      "A confusion matrix shows predicted vs. actual labels per class.",
  },
  {
    id: "s2q2",
    question: "Which metric is most useful when classes are highly imbalanced?",
    options: ["Accuracy", "F1 score", "Mean squared error", "R²"],
    correct: 1,
    explanation:
      "Accuracy is misleading with imbalanced data; F1 balances precision and recall.",
  },
  // add more...
];

export const QUESTION_SETS: QuestionSet[] = [
  {
    id: "set1",
    title: "Azure AI Services",
    description: "Vision, Language, Speech, and Translator basics.",
    questions: set1,
  },
  {
    id: "set2",
    title: "ML Fundamentals",
    description: "Regression, classification, and evaluation metrics.",
    questions: set2,
  },
];
