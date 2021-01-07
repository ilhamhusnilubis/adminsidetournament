import { TestBed } from '@angular/core/testing';

import { EditparticipantService } from './editparticipant.service';

describe('EditparticipantService', () => {
  let service: EditparticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditparticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
