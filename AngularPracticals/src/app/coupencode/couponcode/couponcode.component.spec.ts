import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponcodeComponent } from './couponcode.component';

describe('CouponcodeComponent', () => {
  let component: CouponcodeComponent;
  let fixture: ComponentFixture<CouponcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponcodeComponent]
    });
    fixture = TestBed.createComponent(CouponcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
