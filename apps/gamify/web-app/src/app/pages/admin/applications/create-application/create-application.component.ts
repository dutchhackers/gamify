import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationType } from '@gamify/shared';
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

  constructor(private applicationsService: ApplicationService, private router: Router) { }

  onSubmit() {
    const data = this.form.value;
    if (data.description === "") {
      delete data.description;
    }
    if (data.externalApplicationUrl === "") {
      delete data.externalApplicationUrl;
    }
    this.applicationsService.create$(data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/applications/' + res.id]);
    });

  }
}
