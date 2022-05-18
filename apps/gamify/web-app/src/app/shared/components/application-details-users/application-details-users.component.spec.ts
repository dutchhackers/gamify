import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '../../../ui.module';

import { ApplicationDetailsUsersComponent } from './application-details-users.component';

describe('ApplicationDetailsPlayersComponent', () => {
  let component: ApplicationDetailsUsersComponent;
  let fixture: ComponentFixture<ApplicationDetailsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, HttpClientModule],
      providers: [HttpClient],
      declarations: [ ApplicationDetailsUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
