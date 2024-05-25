import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent {

  recipe: any;
  recipes: any;
  loaded: boolean = false;
  id: boolean = false;

  constructor(private route: ActivatedRoute, private rs: RecipesService) {
    this.route.paramMap.subscribe(params => {
      const recipeId = params.get('id');

      rs.getRecipes().subscribe(data => {
        data.forEach((element: any) => {
          if (element.id == recipeId) {
            this.recipe = element;
            this.id = true;
            this.loaded = true;
          }
        });
      });
    });

    rs.getRecipes().subscribe(data => {
      this.recipes = data;
      this.loaded = true;
    });
  }
}
