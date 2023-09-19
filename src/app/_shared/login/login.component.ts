import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  form: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.form.value;
    this.loginService.login(email, password).subscribe(
      () => {
        this.router.navigateByUrl("/")
      }
    )

  }
  onLoginClick() {
    // Logique de traitement de la connexion
  }
}