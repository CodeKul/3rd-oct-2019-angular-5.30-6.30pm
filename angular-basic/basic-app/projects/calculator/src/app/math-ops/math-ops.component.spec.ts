import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOpsComponent } from './math-ops.component';

describe('MathOpsComponent', () => {
  let component: MathOpsComponent;
  let fixture: ComponentFixture<MathOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
