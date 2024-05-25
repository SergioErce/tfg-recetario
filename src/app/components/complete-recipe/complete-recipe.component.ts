import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-recipe',
  templateUrl: './complete-recipe.component.html',
  styleUrls: ['./complete-recipe.component.css']
})
export class CompleteRecipeComponent {
  @Input() recipe: any;

  ingredients: any;
  tips: any;
  loaded: boolean = false;

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.ingredients = this.recipe.ingredientes.split(',');
    this.tips = this.recipe.elaboracion.split(';');
    this.loaded = true;
  }

  onSelectCosting() {
    this.router.navigate(['/costing', this.recipe.id]);
  }
}
