import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcodesComponent } from './shortcodes.component';

describe('ShortcodesComponent', () => {
  let component: ShortcodesComponent;
  let fixture: ComponentFixture<ShortcodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortcodesComponent]
    });
    fixture = TestBed.createComponent(ShortcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
