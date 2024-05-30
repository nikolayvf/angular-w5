import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeApiService } from '../services/recipe.api';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RecipeDetailComponent],
})
export class RecipeListComponent implements OnInit {
  public recipeInputValue = '';
  public detailCollection: any[] = [];
  public filteredCollection: any[] = [];
  private recipeApiService = inject(RecipeApiService);

  public ngOnInit() {
    this.recipeApiService.getAllRecipes().subscribe((data: any) => {
      this.detailCollection = data.recipes;
      this.updateFilteredCollection();
    });
  }

  public updateFilteredCollection() {
    const filterValue = this.recipeInputValue.toLowerCase();
    if (filterValue === '') {
      this.filteredCollection = this.detailCollection;
    } else {
      this.filteredCollection = this.detailCollection.filter(
        (recipe) =>
          recipe.name && recipe.name.toLowerCase().includes(filterValue)
      );
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
