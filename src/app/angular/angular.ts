import { Component, OnInit, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'aic-angular',
  imports: [NgClass, RouterOutlet],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  activeCategory = signal('All');

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.activeCategory.set(params.get('category') ?? 'All');
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory.set(category);
    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: category === 'All' ? {} : { category },
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
