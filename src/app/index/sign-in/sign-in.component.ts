import { ReactiveFormData, HttpErrorResponse, ApiError } from '@amirsavand/ngx-common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  form: ReactiveFormData = {
    form: this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    }),
    error: {},
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  /**
   * Submit sign-in form and authenticate.
   */
  submit(): void {
    this.form.loading = true;
    this.authService.signIn(this.form.form.value).subscribe({
      error: (error: HttpErrorResponse): void => {
        this.form.loading = false;
        this.form.error = error.error as ApiError;
      },
    });
  }
}
