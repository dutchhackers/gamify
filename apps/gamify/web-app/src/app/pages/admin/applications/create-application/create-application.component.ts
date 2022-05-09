import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationType } from '@gamify/shared';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { ApplicationService } from '../../../../services/application.service';

interface ApplicationTypeSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'coders-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent {

  applicationTypes: ApplicationTypeSelect[] = [
    { value: ApplicationType.GAME, viewValue: 'Game' },
    { value: ApplicationType.CHALLENGE, viewValue: 'Challenge' },
    { value: ApplicationType.EXTERNAL_APP, viewValue: 'External Application' },
  ]

  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "applicationType": new FormControl("", Validators.required),
    "description": new FormControl(""),
    "externalApplicationUrl": new FormControl(""),
  })

  errorMessage$: Subject<string|string[]> = new Subject<string|string[]>();

  constructor(private applicationsService: ApplicationService, private router: Router) { }

  onSubmit() {
    const data = this.form.value;
    if (data.description === "") {
      delete data.description;
    }
    if (data.externalApplicationUrl === "") {
      delete data.externalApplicationUrl;
    }
    this.applicationsService.create$(data).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        this.errorMessage$.next(err.error.message);
        return throwError(() => new Error(err.error.message));
      }),
      tap(res => {
        console.log('successfull created application:', res);
        this.router.navigate(['/admin/applications/' + res.id]);
      })
    ).subscribe();
  }
}
