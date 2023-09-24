import { TestBed } from '@angular/core/testing';

import { AgeServiceService } from './age-service.service';

describe('AgeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeServiceService = TestBed.get(AgeServiceService);
    expect(service).toBeTruthy();
  });
});
