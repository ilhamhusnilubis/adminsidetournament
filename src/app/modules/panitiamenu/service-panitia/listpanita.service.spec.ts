import { TestBed } from '@angular/core/testing';

import { ListpanitaService } from './listpanita.service';

describe('ListpanitaService', () => {
  let service: ListpanitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpanitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
