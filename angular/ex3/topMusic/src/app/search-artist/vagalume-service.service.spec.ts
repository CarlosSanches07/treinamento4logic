import { TestBed, inject } from '@angular/core/testing';

import { VagalumeServiceService } from './vagalume-service.service';

describe('VagalumeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VagalumeServiceService]
    });
  });

  it('should be created', inject([VagalumeServiceService], (service: VagalumeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
