import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyfComponent } from './lyf.component';

describe('LyfComponent', () => {
  let component: LyfComponent;
  let fixture: ComponentFixture<LyfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
