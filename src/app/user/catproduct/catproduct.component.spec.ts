import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatproductComponent } from './catproduct.component';

describe('CatproductComponent', () => {
  let component: CatproductComponent;
  let fixture: ComponentFixture<CatproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
