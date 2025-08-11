import { Component, computed, signal } from '@angular/core';
import { PercentPipe } from '@angular/common'; 

@Component({
  selector: 'app-done',
  imports: [PercentPipe],
  templateUrl: './done.html',
  styleUrl: './done.scss'
})
export class Done {
  readonly correct = signal(3);

  readonly total = signal(8);

  readonly score = computed(() => this.correct() / this.total());
}
