import { TestBed, async, inject } from '@angular/core/testing';

import { CreateEmployeeCanDeactivateGuardGuard } from './create-employee-can-deactivate-guard.guard';

describe('CreateEmployeeCanDeactivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEmployeeCanDeactivateGuardGuard]
    });
  });

  it('should ...', inject([CreateEmployeeCanDeactivateGuardGuard], (guard: CreateEmployeeCanDeactivateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
