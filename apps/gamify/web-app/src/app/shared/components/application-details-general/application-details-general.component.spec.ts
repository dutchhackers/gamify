import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '../../../ui.module';

import { ApplicationDetailsGeneralComponent } from './application-details-general.component';

describe('ApplicationDetailsGeneralComponent', () => {
  // let component: ApplicationDetailsGeneralComponent;
  // let fixture: ComponentFixture<ApplicationDetailsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, HttpClientModule],
      providers: [HttpClient],
      declarations: [ ApplicationDetailsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(ApplicationDetailsGeneralComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
