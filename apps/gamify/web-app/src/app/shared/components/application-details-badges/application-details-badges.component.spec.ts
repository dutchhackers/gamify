import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '../../../ui.module';

import { ApplicationDetailsBadgesComponent } from './application-details-badges.component';

describe('ApplicationDetailsBadgesComponent', () => {
  let component: ApplicationDetailsBadgesComponent;
  let fixture: ComponentFixture<ApplicationDetailsBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, HttpClientModule],
      providers: [HttpClient],
      declarations: [ ApplicationDetailsBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
