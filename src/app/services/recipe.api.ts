import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  private http = inject(HttpClient);

  public getAllRecipes() {
    return this.http.get('https://dummyjson.com/recipes');
  }
}
