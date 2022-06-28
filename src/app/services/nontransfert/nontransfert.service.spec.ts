import { TestBed } from '@angular/core/testing';

import { NontransfertService } from './nontransfert.service';

describe('NontransfertService', () => {
  let service: NontransfertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NontransfertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
