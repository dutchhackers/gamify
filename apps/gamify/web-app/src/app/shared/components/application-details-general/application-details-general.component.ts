import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Application } from '@gamify/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'coders-application-details-general',
  templateUrl: './application-details-general.component.html',
  styleUrls: ['./application-details-general.component.scss']
})
export class ApplicationDetailsGeneralComponent implements OnInit {

  @Input() application$: Observable<Application> | undefined;

  // this

  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "externalApplicationUrl": new FormControl("", Validators.required),
  })

  // constructor() { }

  ngOnInit(): void {
    this.application$?.subscribe(application => {
      console.log('application changed:');
      console.log(application);

      this.form.patchValue({
        "name": application.name,
        "description": application.description,
        "externalApplicationUrl": application.externalApplicationUrl,
      });
    });
  }

  save(): void {
    // this.form.value

    console.log(this.form.value);
  }

}
