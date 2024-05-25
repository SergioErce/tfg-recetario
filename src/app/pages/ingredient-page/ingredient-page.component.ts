import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientInterface } from 'src/app/models/ingredient-interface';
import { IngredientsService } from 'src/app/services/ingredients.service';

let ELEMENT_DATA: IngredientInterface[] = [];

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent {

  loaded: boolean = false;
  displayedColumns: string[] = ['ID', 'nombre', 'precio'];
  dataSource = new MatTableDataSource();

  constructor(private is: IngredientsService) {
    ELEMENT_DATA = [];
    this.is.getIngredients().subscribe((data: any) => {
      data.forEach((element: IngredientInterface) => {
        ELEMENT_DATA.push(element);
      });
      this.dataSource.data = ELEMENT_DATA;
      this.loaded = true;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}