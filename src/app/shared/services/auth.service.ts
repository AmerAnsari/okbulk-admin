import { AuthBaseService } from '@amirsavand/ngx-common/dist/serices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '@app/shared/classes/api';
import { AuthResponse } from '@interfaces/auth-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthBaseService {

  constructor(private http: HttpClient,
              private router: Router) {
    super();
  }

  /**
   * Sign user in.
   * @param payload Username and password.
   */
  signIn(payload: { username: string, password: string }): Observable<void> {
    return this.http.post<AuthResponse>(`${Api.BASE}auth/`, payload).pipe(
      map((data: AuthResponse): void => {
        // Store token, user and profile
        AuthService.token = data.token;
        AuthService.user = data.user;
        AuthService.authenticate();
        this.router.navigate(['/dash']);
        return;
      }),
    );
  }

  /**
   * Sign out.
   */
  signOut() {
    super.signOut();
    this.router.navigate(['/']);
  }
}
