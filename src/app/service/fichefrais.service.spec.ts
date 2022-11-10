import { TestBed } from '@angular/core/testing';

import { FichefraisService } from './fichefrais.service';

describe('FichefraisService', () => {
  let service: FichefraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichefraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
