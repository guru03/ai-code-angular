import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aic-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class Loader {}
