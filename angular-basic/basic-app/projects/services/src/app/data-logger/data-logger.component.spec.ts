import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoggerComponent } from './data-logger.component';

describe('DataLoggerComponent', () => {
  let component: DataLoggerComponent;
  let fixture: ComponentFixture<DataLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
