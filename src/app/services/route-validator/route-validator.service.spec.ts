import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { RouteValidatorService } from './route-validator.service';

describe('RouteValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule]

  }));

  it('should be created', () => {
    const service: RouteValidatorService = TestBed.get(RouteValidatorService);
    expect(service).toBeTruthy();
  });
});
