import { TestBed } from '@angular/core/testing';

import { ListtableService } from './listtable.service';

describe('ListtableService', () => {
  let service: ListtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
