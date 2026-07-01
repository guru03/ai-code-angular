import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aic-blogs',
  imports: [],
  templateUrl: './blogs.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './blogs.scss',
})
export class Blogs {
  codeTesting = `@Component({
  selector: 'app-user-card',
  template: \`<h2>{{ user.name }}</h2>\`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user: User;
  
  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.updateInternalCounter(); // does not trigger CD
      }, 100);
    });
  }

  updateUI() {
    this.ngZone.run(() => {
      this.displayValue = this.internalCounter; // triggers CD
    });
  }
}`;
}
