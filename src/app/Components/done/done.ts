import { Component, computed, inject, signal } from '@angular/core';
import { PercentPipe } from '@angular/common'; 
import { QuizStore } from '../../Store/quizstore';

@Component({
  selector: 'app-done',
  imports: [PercentPipe],
  templateUrl: './done.html',
  styleUrl: './done.scss'
})
export class Done {
  readonly store = inject(QuizStore);

  readonly correct = this.store.correctCount;

  readonly total = this.store.questionsCount;

  readonly score = computed(() => this.correct() / this.total());
}
