import { Component, inject, signal } from '@angular/core';
import { Question } from '../../Models/questionModel';
import {ColorNamePipe} from '../../Pipes/color-name.pipe'
import { QuizStore } from '../../Store/quizstore';

@Component({
  selector: 'app-question-presenter',
  imports: [ColorNamePipe],
  templateUrl: './question-presenter.html',
  styleUrl: './question-presenter.scss'
})
export class QuestionPresenter {
//  readonly question = signal<Question>({
//    caption: ['Red', 'Green'],
//    answers: ['Red', 'Green', 'Blue', 'Yellow' ],
//    correctIndex: 3
//  });
readonly store = inject(QuizStore);
readonly question = this.store.currentQuestion;
}
