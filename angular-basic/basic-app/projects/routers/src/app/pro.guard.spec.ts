import { TestBed, async, inject } from '@angular/core/testing';

import { ProGuard } from './pro.guard';

describe('ProGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProGuard]
    });
  });

  it('should ...', inject([ProGuard], (guard: ProGuard) => {
    expect(guard).toBeTruthy();
  }));
});
