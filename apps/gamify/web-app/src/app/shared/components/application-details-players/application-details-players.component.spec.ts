import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '../../../ui.module';

import { ApplicationDetailsPlayersComponent } from './application-details-players.component';

describe('ApplicationDetailsPlayersComponent', () => {
  let component: ApplicationDetailsPlayersComponent;
  let fixture: ComponentFixture<ApplicationDetailsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, HttpClientModule],
      providers: [HttpClient],
      declarations: [ ApplicationDetailsPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDetailsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
