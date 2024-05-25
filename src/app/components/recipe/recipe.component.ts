import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  @Input() recipe: any;

  constructor(private router: Router) { }

  onSelectRecipe() {
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
