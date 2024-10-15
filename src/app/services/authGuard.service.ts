import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
 private _isLogged: boolean = false;

  constructor() {
    // const storedLoginStatus = localStorage.getItem('isLogged');
    this._isLogged = true;
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  login() {
    this._isLogged = true;
    // localStorage.setItem("isLogged",'true')
  }

  logout() {
    this._isLogged = false;
    // localStorage.removeItem("isLogged")
  }
}
