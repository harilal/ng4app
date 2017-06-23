import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  set(name: string, value: any) {
        value = _.isString(value) ? value : JSON.stringify(value);
        window.sessionStorage.setItem(name, value);
    }
    get(name: string) {
        let val;
        try {
            val = JSON.parse(window.sessionStorage.getItem(name));
        } catch (error) {
            val = window.sessionStorage.getItem(name);
        }
        return val;
    }
    remove(name: string) {
        window.sessionStorage.removeItem(name);
    }

    setLocal(name: string, value: any) {
        value = _.isString(value) ? value : JSON.stringify(value);
        window.localStorage.setItem(name, value);
    }
    getLocal(name: string) {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(name));
        } catch (error) {
            val = window.localStorage.getItem(name);
        }
        return val;
    }
    removeLocal(name: string) {
        window.localStorage.removeItem(name);
    }
}
