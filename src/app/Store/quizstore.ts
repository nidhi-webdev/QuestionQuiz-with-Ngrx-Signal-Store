import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { initialQuizSlice } from "./quizslice.";
import { computed } from "@angular/core";
import { addAnswerUpdater, resetQuiz } from "./quiz.updaters";
import { getCorrectCount } from "./quizhelpers";

export const QuizStore = signalStore(
    { providedIn: 'root' },
    withState(initialQuizSlice),
    withComputed((store) => {
       const currentQuestionIndex = computed(() => store.answer().length);
        const isDone =  computed(() => store.answer().length === store.questions().length);
        const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
        const questionsCount = computed(() => store.questions().length);
        const correctCount = computed(() => getCorrectCount(store.answer(), store.questions()));
        return {
            currentQuestionIndex,
            isDone,
            currentQuestion,
            questionsCount,
            correctCount
        }
    }),
    withMethods(store => ({
        addAnswer: (index: number) =>  patchState(store, addAnswerUpdater(index)),
        reset: () => patchState(store, resetQuiz())
    }))
);




