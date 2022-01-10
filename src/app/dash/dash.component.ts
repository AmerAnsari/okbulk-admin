import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {

  readonly faMenu: IconDefinition = faBars;
  readonly faProducts: IconDefinition = faBoxes;
  readonly faDashboard: IconDefinition = faTachometerAlt;

  collapsedSidebar = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!AuthService.IS_AUTH.value) {
      this.router.navigate(['/']);
    }
  }
}
