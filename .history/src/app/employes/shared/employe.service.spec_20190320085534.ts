import { TestBed } from '@angular/core/testing';

import { ClientService } from './employe.service';

describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });
});
