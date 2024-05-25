import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CostingPageComponent } from './pages/costing-page/costing-page.component';
import { IngredientPageComponent } from './pages/ingredient-page/ingredient-page.component';
import { userGuard } from './guards/user.guard';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "recipe",
    component: RecipePageComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipePageComponent
  },
  {
    path: "costing",
    component: CostingPageComponent,
    canActivate: [userGuard]
  },
  {
    path: 'costing/:id',
    component: CostingPageComponent,
    canActivate: [userGuard]
  },
  {
    path: "ingredient",
    component: IngredientPageComponent,
    canActivate: [userGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
