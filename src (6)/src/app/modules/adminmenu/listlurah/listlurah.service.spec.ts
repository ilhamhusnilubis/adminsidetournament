import { TestBed } from '@angular/core/testing';

import { ListlurahService } from './listlurah.service';

describe('ListlurahService', () => {
  let service: ListlurahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListlurahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
