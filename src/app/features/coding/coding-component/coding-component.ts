import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aic-coding-component',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './coding-component.html',
  styleUrl: './coding-component.scss',
})
export class CodingComponent { }
