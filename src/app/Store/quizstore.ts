import { signalStore, withComputed, withState } from "@ngrx/signals"
import { initialQuizSlice } from "./quizslice.";
import { computed } from "@angular/core";

export const QuizStore = signalStore(
    { providedIn: 'root' },
    withState(initialQuizSlice),
    withComputed((store) => {
       const currentQuestionIndex = computed(() => store.answer().length);
        const isDone =  computed(() => store.answer().length === store.questions().length);
        const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
        const questionsCount = computed(() => store.questions().length);
        return {
            currentQuestionIndex,
            isDone,
            currentQuestion,
            questionsCount
        }
    })
);




