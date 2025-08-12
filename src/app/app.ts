import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Done } from './Components/done/done';
import { Progress } from './Components/progress/progress';
import { QuestionPresenter } from './Components/question-presenter/question-presenter';
import { Toolbar } from './Components/toolbar/toolbar';
import { QuizStore } from './Store/quizstore';
import { MatIcon } from '@angular/material/icon';
// import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [QuestionPresenter, Toolbar, Progress, MatIcon, Done],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Ngrx');
  readonly store = inject(QuizStore);
}
