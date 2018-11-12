import { TestBed } from '@angular/core/testing';

import { RouteValidatorService } from './route-validator.service';

describe('RouteValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteValidatorService = TestBed.get(RouteValidatorService);
    expect(service).toBeTruthy();
  });
});
