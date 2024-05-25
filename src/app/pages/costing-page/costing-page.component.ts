import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostingInterface } from 'src/app/models/costing-interface';
import { IngredientInterface } from 'src/app/models/ingredient-interface';
import { CostServiceService } from 'src/app/services/cost-service.service';
import { IngredientsService } from 'src/app/services/ingredients.service';

interface Transaction {
  ingredient: string;
  cant: number;
  cost: number;
}

@Component({
  selector: 'app-costing-page',
  templateUrl: './costing-page.component.html',
  styleUrls: ['./costing-page.component.css']
})
export class CostingPageComponent {

  loaded: boolean = false;
  ingredientes: IngredientInterface[] = [];
  escandallos: CostingInterface[] = [];
  escandallo: CostingInterface = { id: 0, ingrediente: "string", cantidad: "string" };
  displayedColumns: string[] = ['ingredient', 'cant', 'cost'];
  transactions: Transaction[] = [];

  constructor(private route: ActivatedRoute, private is: IngredientsService, private cs: CostServiceService) {
    this.is.getIngredients().subscribe((data: IngredientInterface[]) => {
      this.ingredientes = data;
      this.initializeData();
    });

    this.cs.getCosting().subscribe((data: CostingInterface[]) => {
      this.escandallos = data;
      this.initializeData();
    });
  }

  initializeData() {
    if (this.ingredientes.length && this.escandallos.length) {
      this.route.paramMap.subscribe(params => {
        const costingId = params.get('id');
        const escandallo = this.escandallos.find((element: any) => element.id == costingId);

        if (escandallo) {
          this.escandallo = escandallo;
          const listaIng = this.escandallo.ingrediente.split(",");
          const listaCant = this.escandallo.cantidad.split(",").map(Number);

          listaIng.forEach((ingId, index) => {
            const ingrediente = this.ingredientes.find((ingre: any) => ingre.id == ingId);
            if (ingrediente) {
              const transaction: Transaction = {
                ingredient: ingrediente.nombre,
                cant: listaCant[index],
                cost: ingrediente.precio * listaCant[index]
              };
              this.transactions.push(transaction);
            }
          });
          this.loaded = true;
        }
      });
    }
  }

  getTotalCost() {
    return this.transactions.reduce((acc, transaction) => acc + transaction.cost, 0).toFixed(2);
  }
}
