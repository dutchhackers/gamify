import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'coders-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;

  loginForm: UntypedFormGroup = new UntypedFormGroup({
    "email": new UntypedFormControl("", [Validators.required, Validators.email]),
    "password": new UntypedFormControl("", Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.loading = true;

    // NOTE: There is currently no error handling for login because the form should be replaced with Google Login
    this.authService.attemptLogin(this.loginForm.value).subscribe(() => {
      this.authService.me().subscribe(() => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      });
    });
  }

}
