import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJmbComponent } from './my-jmb.component';

describe('MyJmbComponent', () => {
  let component: MyJmbComponent;
  let fixture: ComponentFixture<MyJmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
