import { Component, computed, inject, input, signal } from '@angular/core';
import { QuizStore } from '../../Store/quizstore';

@Component({
  selector: 'app-progress',
  imports: [],
  templateUrl: './progress.html',
  styleUrl: './progress.scss'
})
export class Progress {
  readonly store = inject(QuizStore);
  readonly value = input.required<number>();

  readonly max = input.required<number>();

  readonly ratio = computed(() => this.value() / this.max());
}
