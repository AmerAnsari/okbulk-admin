import { HttpErrorResponse } from '@amirsavand/ngx-common';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthService.token) {
      // Include authentication token.
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${AuthService.token}`,
        },
      });
    }
    return next.handle(request).pipe(catchError((error: HttpErrorResponse): Observable<never> => {
      // Sign out if 401 response
      if (error.status === 401) {
        this.authService.signOut();
      }
      return throwError(error);
    }));
  }
}
