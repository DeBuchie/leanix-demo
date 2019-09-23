import { TestBed } from '@angular/core/testing';

import { RepositoryDetailsService } from './repository-details.service';

describe('RepositoryDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryDetailsService = TestBed.get(RepositoryDetailsService);
    expect(service).toBeTruthy();
  });
});
