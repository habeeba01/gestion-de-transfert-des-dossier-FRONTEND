import { TestBed } from '@angular/core/testing';

import { DestinationJugService } from './destination.service';

describe('DestinationService', () => {
  let service: DestinationJugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationJugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
