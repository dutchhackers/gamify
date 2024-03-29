import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Application } from '@gamify/shared';
import { catchError, Observable, Subject, throwError } from 'rxjs';
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

  form = new UntypedFormGroup({
    "name": new UntypedFormControl("", Validators.required),
    "description": new UntypedFormControl(""),
    "externalApplicationUrl": new UntypedFormControl(""),
  })
  
  errorMessage$: Subject<string|string[]> = new Subject<string|string[]>();

  constructor(private applicationsService: ApplicationService, private snackBar: MatSnackBar) { }

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
      catchError((err: HttpErrorResponse) => {
        this.errorMessage$.next(err.error.message);
        return throwError(() => new Error('Error while saving application, please try again'));
      })
    );
    request.subscribe(res => {
      this.applicationUpdated.emit(res);
      this.snackBar.open('Application saved!', 'Close', {
        horizontalPosition: 'center',	
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }

}
