import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RecipeListComponent } from './app/recipe-list/recipe-list.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'recipe',
        component: RecipeListComponent,
      },
    ]),
  ],
}).catch((err) => console.error(err));
