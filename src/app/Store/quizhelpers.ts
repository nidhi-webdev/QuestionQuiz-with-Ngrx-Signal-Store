import { Question } from "../Models/questionModel";

export function getCorrectCount(answer: number[], questions: Question[]): number {
    let res = 0;
    for (let i = 0; i < answer.length; i++) {
        if (questions.length > i && answer[i] === questions[i].correctIndex) {
            res++;
        }
    }

    return res;
}





