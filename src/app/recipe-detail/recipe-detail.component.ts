import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RecipeDetailComponent {
  @Input() inputDetail!: string;
  @Input() ingredients!: string[];
  @Input() instructions!: string[];
  @Input() image!: string;
  @Input() cuisine!: string;
  @Input() inputDetailObject!: any;
}
