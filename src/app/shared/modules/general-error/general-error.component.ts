import { ReactiveFormData } from '@amirsavand/ngx-common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-error',
  templateUrl: './general-error.component.html',
  styleUrls: ['./general-error.component.scss'],
})
export class GeneralErrorComponent {
  @Input() form: ReactiveFormData;
  @Input() classes = 'alert alert-danger';
}
