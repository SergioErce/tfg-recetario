import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  recipes: any;
  loaded: boolean = false;

  constructor(private rs: RecipesService) {
    this.rs.getRecipes().subscribe(data => {
      this.recipes = data;
      this.loaded = true;
    });
  }

}