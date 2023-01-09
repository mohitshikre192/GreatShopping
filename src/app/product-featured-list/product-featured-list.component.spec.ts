import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeaturedListComponent } from './product-featured-list.component';

describe('ProductFeaturedListComponent', () => {
  let component: ProductFeaturedListComponent;
  let fixture: ComponentFixture<ProductFeaturedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeaturedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
