import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  isLoggedIn(){
    return !!this.storage.get('auth_token') && !!this.storage.get('user_info');
  }
}
