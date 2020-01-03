import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfComponent } from './tf.component';

describe('TfComponent', () => {
  let component: TfComponent;
  let fixture: ComponentFixture<TfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
