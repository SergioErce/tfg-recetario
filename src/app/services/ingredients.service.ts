import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../models/ingredient-interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  constructor(private http: HttpClient) { }

  getIngredients(): Observable<IngredientInterface[]> {
    return this.http.get<IngredientInterface[]>('http://localhost/tfg/ingredients.php');
  }
}
