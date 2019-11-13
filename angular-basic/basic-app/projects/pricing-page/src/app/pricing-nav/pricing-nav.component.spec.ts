import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingNavComponent } from './pricing-nav.component';

describe('PricingNavComponent', () => {
  let component: PricingNavComponent;
  let fixture: ComponentFixture<PricingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
