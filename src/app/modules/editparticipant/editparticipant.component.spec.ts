import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparticipantComponent } from './editparticipant.component';

describe('EditparticipantComponent', () => {
  let component: EditparticipantComponent;
  let fixture: ComponentFixture<EditparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditparticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
