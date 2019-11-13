import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingInfoComponent } from './pricing-info.component';

describe('PricingInfoComponent', () => {
  let component: PricingInfoComponent;
  let fixture: ComponentFixture<PricingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
