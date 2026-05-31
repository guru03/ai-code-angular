import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aic-angular',
  imports: [NgClass, RouterOutlet],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  activeCategory = signal('All');

  filterByCategory(category: string): void {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
