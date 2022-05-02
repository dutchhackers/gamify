import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsGeneralComponent } from './application-details-general.component';

describe('ApplicationDetailsGeneralComponent', () => {
  let component: ApplicationDetailsGeneralComponent;
  let fixture: ComponentFixture<ApplicationDetailsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDetailsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
