import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSampleComponent } from './first-sample.component';

describe('FirstSampleComponent', () => {
  let component: FirstSampleComponent;
  let fixture: ComponentFixture<FirstSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
