import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRecipeComponent } from './complete-recipe.component';

describe('CompleteRecipeComponent', () => {
  let component: CompleteRecipeComponent;
  let fixture: ComponentFixture<CompleteRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteRecipeComponent]
    });
    fixture = TestBed.createComponent(CompleteRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
