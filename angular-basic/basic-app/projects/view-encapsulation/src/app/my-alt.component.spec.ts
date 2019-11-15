import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAltComponent } from './my-alt.component';

describe('MyAltComponent', () => {
  let component: MyAltComponent;
  let fixture: ComponentFixture<MyAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
