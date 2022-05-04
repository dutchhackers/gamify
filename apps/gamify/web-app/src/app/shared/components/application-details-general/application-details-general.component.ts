import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Application } from '@gamify/shared';
import { catchError, Observable, throwError } from 'rxjs';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'coders-application-details-general',
  templateUrl: './application-details-general.component.html',
  styleUrls: ['./application-details-general.component.scss']
})
export class ApplicationDetailsGeneralComponent implements OnInit {

  @Input() application$: Observable<Application> | undefined;
  application: Application | undefined;

  @Output() applicationUpdated: EventEmitter<Application> = new EventEmitter<Application>(); 

  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "description": new FormControl(""),
    "externalApplicationUrl": new FormControl(""),
  })

  constructor(private applicationsService: ApplicationService) { }

  ngOnInit(): void {
    this.application$?.subscribe(application => {
      this.application = application;

      this.form.patchValue({
        "name": application.name,
        "description": application.description,
        "externalApplicationUrl": application.externalApplicationUrl,
      });
    });
  }

  onSubmit(): void {
    const id = this.application?.id;
    if (!id) return;

    const data = this.form.value;
    if (data.description === "") {
      delete data.description;
    }
    if (data.externalApplicationUrl === "") {
      delete data.externalApplicationUrl;
    }

    const request = this.applicationsService.update$(id, data).pipe(
      catchError((err: any, caught: Observable<Application>) => {
        console.log('caught an error!!');
        console.log(err);
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
    request.subscribe(res => {
      console.log('Updated application:', res);
      this.applicationUpdated.emit(res);
    });
  }

}
