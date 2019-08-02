import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly USERNAME = 'Username';
  private readonly USERAVATAR = 'UserAvatarPath';
  private readonly USERID = 'Userid';
  private readonly USERROLE = 'Userrole';

  constructor(private http: HttpClient, private router: Router, private dialogService: DialogService) { }

  loginUserService(username: string, password: string) {
    this.userService(username, password, 'login');
  }

  registerUserService(username: string, password: string, code: number) {
    this.userService(username, password, 'register', code);
  }


  userService(username: string, password: string, route: string, code?: number) {
    return this.http.post(`${environment.serverURL}/${route}`,
      { username, password, code },
      { headers: { 'Content-Type': 'application/json' } }).subscribe(
        (response: Response) => {
          console.log(response)
          this.storeTokens(response['username'], response['avatarPath'], response['_id'], response['role']);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.dialogService.openError(error['error']['message'], error['status']);
        });
  }
  logoutUserService() {
    this.removeTokens();
  }

  getUsernameLocal() {
    return localStorage.getItem(this.USERNAME);
  }

  getUserAvatarLocal() {
    return localStorage.getItem(this.USERAVATAR);
  }

  getUserRoleLocal() {
    return localStorage.getItem(this.USERROLE);
  }

  private storeTokens(userName: string, profilePicture: string, userID: string, role: string) {
    localStorage.setItem(this.USERNAME, userName);
    localStorage.setItem(this.USERAVATAR, profilePicture);
    localStorage.setItem(this.USERID, userID);
    localStorage.setItem(this.USERROLE, role);
  }
  private removeTokens() {
    localStorage.removeItem(this.USERNAME);
    localStorage.removeItem(this.USERAVATAR);
    localStorage.removeItem(this.USERID);
    localStorage.removeItem(this.USERROLE);
  }
}
