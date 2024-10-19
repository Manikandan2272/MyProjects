import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgGridComponent } from './ig-grid.component';

describe('IgGridComponent', () => {
  let component: IgGridComponent;
  let fixture: ComponentFixture<IgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgGridComponent]
    });
    fixture = TestBed.createComponent(IgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
