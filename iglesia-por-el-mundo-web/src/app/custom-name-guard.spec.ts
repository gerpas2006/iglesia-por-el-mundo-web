import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cUSTOMNAMEGuard } from './custom-name-guard';

describe('cUSTOMNAMEGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cUSTOMNAMEGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
