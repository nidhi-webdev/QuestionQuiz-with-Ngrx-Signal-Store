import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Question } from '../Models/questionModel';
import { randomColorQuiz } from './helpers';

@Injectable({
  providedIn: 'root'
})
export class ColorQuizGenerator {

  createRandomQuiz(): Observable<Question[]> {
    return of(1).pipe(
      map(_ => randomColorQuiz()),
      delay(2000)
    );
  }
}
