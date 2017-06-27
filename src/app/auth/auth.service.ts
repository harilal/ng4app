import { Injectable } from '@angular/core';
import {StorageService} from "app/core/storage.service"
@Injectable()
export class AuthService {

  constructor(private storage:StorageService) { }
  isLoggedIn(){
    return !!this.storage.get('auth_token') && !!this.storage.get('user_info');
  }
}
