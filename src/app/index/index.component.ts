import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (AuthService.IS_AUTH.value) {
      this.router.navigate(['/dash']);
    } else {
      this.router.navigate(['/sign-in']);
    }
  }
}
