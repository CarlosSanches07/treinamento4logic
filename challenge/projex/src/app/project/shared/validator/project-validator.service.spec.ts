import { TestBed, inject } from '@angular/core/testing';

import { ProjectValidatorService } from './project-validator.service';

describe('ProjectValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectValidatorService]
    });
  });

  it('should be created', inject([ProjectValidatorService], (service: ProjectValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
