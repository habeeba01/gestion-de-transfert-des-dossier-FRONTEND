import { TestBed } from '@angular/core/testing';

import { DescriptionJugService } from './description.service';

describe('DescriptionService', () => {
  let service: DescriptionJugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionJugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
