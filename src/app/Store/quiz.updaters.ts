import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quizslice.";

export function addAnswerUpdater(index: number): PartialStateUpdater<QuizSlice> {
 return state => ({
   answer: [...state.answer, index]
 })
}

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
    return _ => ({
        answer: []
    })
}