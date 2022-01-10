import { AuthResponse as ngxAuthResponse } from '@amirsavand/ngx-common';
import { User } from '@interfaces/user';

export interface AuthResponse extends ngxAuthResponse {
  token: string;
  user: User;
}
