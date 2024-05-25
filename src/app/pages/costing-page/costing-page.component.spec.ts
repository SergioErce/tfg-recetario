import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingPageComponent } from './costing-page.component';

describe('CostingPageComponent', () => {
  let component: CostingPageComponent;
  let fixture: ComponentFixture<CostingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostingPageComponent]
    });
    fixture = TestBed.createComponent(CostingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
