import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { LoginComponent } from './pages/login/login.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { CostingPageComponent } from './pages/costing-page/costing-page.component';
import { IngredientPageComponent } from './pages/ingredient-page/ingredient-page.component';
import { CompleteRecipeComponent } from './components/complete-recipe/complete-recipe.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    NotFoundComponent,
    RecipeComponent,
    HeaderComponent,
    LanguageSwitcherComponent,
    LoginComponent,
    RecipePageComponent,
    CostingPageComponent,
    IngredientPageComponent,
    CompleteRecipeComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/languages/", ".json");
}