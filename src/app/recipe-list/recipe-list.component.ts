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
  public showFavoritesOnly = false;
  private recipeApiService = inject(RecipeApiService);

  public ngOnInit() {
    this.recipeApiService.getAllRecipes().subscribe((data: any) => {
      this.detailCollection = data.recipes.map((recipe: any) => ({
        ...recipe,
        favorite: false,
      }));
      this.updateFilteredCollection();
    });
  }

  public updateFilteredCollection() {
    const filterValue = this.recipeInputValue.toLowerCase();
    if (this.showFavoritesOnly) {
      this.filteredCollection = this.detailCollection.filter(
        (recipe) =>
          recipe.favorite && recipe.name.toLowerCase().includes(filterValue)
      );
    } else {
      this.filteredCollection = this.detailCollection.filter((recipe) =>
        recipe.name.toLowerCase().includes(filterValue)
      );
    }
  }

  public toggleFavorite(recipe: any) {
    recipe.favorite = !recipe.favorite;
  }

  public toggleShowFavorites() {
    this.showFavoritesOnly = !this.showFavoritesOnly;
    this.updateFilteredCollection();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
