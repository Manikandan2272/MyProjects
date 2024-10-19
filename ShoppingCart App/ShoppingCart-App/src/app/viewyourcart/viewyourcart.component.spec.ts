import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyourcartComponent } from './viewyourcart.component';

describe('ViewyourcartComponent', () => {
  let component: ViewyourcartComponent;
  let fixture: ComponentFixture<ViewyourcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewyourcartComponent]
    });
    fixture = TestBed.createComponent(ViewyourcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
