import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals"
import { initialQuizSlice, QuizSlice } from "./quizslice.";
import { computed, effect } from "@angular/core";
import { addAnswerUpdater, resetQuiz } from "./quiz.updaters";
import { getCorrectCount } from "./quizhelpers";

export const QuizStore = signalStore(
    { providedIn: 'root' },
    withState(initialQuizSlice),
    withComputed((store) => {
        const currentQuestionIndex = computed(() => store.answer().length);
        const isDone = computed(() => store.answer().length === store.questions().length);
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
        addAnswer: (index: number) => patchState(store, addAnswerUpdater(index)),
        reset: () => patchState(store, resetQuiz())
    })),
    withHooks((store) => ({
       onInit: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const stateJson = localStorage.getItem('quiz');
        if (stateJson) {
            const state = JSON.parse(stateJson) as QuizSlice;
            patchState(store, state);
        }

        effect(() => {
            const state = getState(store);
            const stateJson = JSON.stringify(state);
            localStorage.setItem('quiz', stateJson);
        });
    }
}
    }))
);




