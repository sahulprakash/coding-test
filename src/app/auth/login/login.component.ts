import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    try {
      const response: any = await this.authService.login(this.loginForm.value);
      if (response?.status == '200') {
        localStorage.setItem('userData', JSON.stringify(response));
        this.router.navigate(['/home']);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log('Invalid credentials');
    }
  }
  get form() {
    return this.loginForm.controls;
  }
}
