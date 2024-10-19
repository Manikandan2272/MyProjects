import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprouductsComponent } from './listprouducts.component';

describe('ListprouductsComponent', () => {
  let component: ListprouductsComponent;
  let fixture: ComponentFixture<ListprouductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprouductsComponent]
    });
    fixture = TestBed.createComponent(ListprouductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
