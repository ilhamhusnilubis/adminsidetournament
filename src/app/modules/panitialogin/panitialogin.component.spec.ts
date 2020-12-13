import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitialoginComponent } from './panitialogin.component';

describe('PanitialoginComponent', () => {
  let component: PanitialoginComponent;
  let fixture: ComponentFixture<PanitialoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanitialoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitialoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
