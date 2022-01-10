import { Crud } from '@amirsavand/ngx-common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Data, Event } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /** Window title without suffix. */
  static readonly TITLE = 'OkBulk';

  /** Window title with suffix. */
  static readonly TITLE_SUFFIX = ` - ${AppComponent.TITLE}`;

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private authService: AuthService) {
  }


  ngOnInit(): void {
    // Setup crud class.
    Crud.initiate(this.http, environment.api);

    // Initialize the auth service.
    this.authService.initiate();

    // Watch for page changes then update window title with translation.
    this.router.events.pipe(
      filter((event: Event): boolean => event instanceof NavigationEnd),
      map((): ActivatedRoute => this.route),
      map((activatedRoute: ActivatedRoute): ActivatedRoute => {
        while (activatedRoute.firstChild) {
          activatedRoute = activatedRoute.firstChild;
        }
        return activatedRoute;
      }),
      filter((activatedRoute: ActivatedRoute): boolean => activatedRoute.outlet === 'primary'),
      mergeMap((activatedRoute: ActivatedRoute): Observable<Data> => activatedRoute.data),
    ).subscribe((event: Data): void => {
      if (event.title) {
        this.title.setTitle(`${event.title}${AppComponent.TITLE_SUFFIX}`);
      } else {
        this.title.setTitle(AppComponent.TITLE);
      }
    });
  }
}
