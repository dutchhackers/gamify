import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsModeratorsComponent } from './application-details-moderators.component';

describe('ApplicationDetailsModeratorsComponent', () => {
  let component: ApplicationDetailsModeratorsComponent;
  let fixture: ComponentFixture<ApplicationDetailsModeratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailsModeratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsModeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
