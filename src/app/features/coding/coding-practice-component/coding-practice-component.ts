import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aic-coding-practice-component',
  imports: [RouterLink],
  templateUrl: './coding-practice-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './coding-practice-component.scss',
})
export class CodingPracticeComponent {}
