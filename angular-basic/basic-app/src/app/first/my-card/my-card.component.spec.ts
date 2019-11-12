import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardComponent } from './my-card.component';

describe('MyCardComponent', () => {
  let component: MyCardComponent;
  let fixture: ComponentFixture<MyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
