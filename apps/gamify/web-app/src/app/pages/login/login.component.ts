import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'coders-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.attemptLogin(this.loginForm.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
