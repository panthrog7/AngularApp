import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsGuardService } from './employee-details-guard.service';

describe('EmployeeDetailsGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDetailsGuardService = TestBed.get(EmployeeDetailsGuardService);
    expect(service).toBeTruthy();
  });
});
