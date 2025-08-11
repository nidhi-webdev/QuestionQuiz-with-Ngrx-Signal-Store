import {QUESTIONS} from '../data/question';
import { Question } from '../Models/questionModel';


export interface QuizSlice {
  readonly questions: Question[];
  readonly answer: number[];
}

export const initialQuizSlice: QuizSlice = {
  questions: QUESTIONS,
  answer: []
}