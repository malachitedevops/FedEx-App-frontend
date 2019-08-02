import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
// import { Post } from '../models/post.model';
// import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureService {

  private newProfilePicture = new Subject<string>();

  constructor(private http: HttpClient, private dialogService: DialogService) { }

  updateProfilePicture(image: File, username: string) {
    const reqBody = new FormData();
    reqBody.append('image', image, username);
    return this.http.put(`${environment.serverURL}/settings/picture/${username}`, reqBody)
    .subscribe((result: any) => {
      this.newProfilePicture.next(result.avatarPath);
      localStorage.setItem('UserAvatarPath', result.avatarPath);
    }, (error) => {
      this.dialogService.openError(error.error.message, error.status);
    });
  }

  get getUserAvatarPath() {
    return this.newProfilePicture.asObservable();
  }

  // getAvatarImages() {
  //   return this.http.get(`${environment.serverURL}/settings/avatars`, {
  //     headers: { 'content-type': 'application/json' }
  //   });
  // }

  // updateProfilePictureWithAvatar(avatarPath, username) {
  //   const reqBody = {avatar: avatarPath};
  //   return this.http.put(`${environment.serverURL}/settings/avatars/${username}`, reqBody, {
  //     headers: { 'content-type': 'application/json' }
  //   }).subscribe((result: User) => {
  //     this.newProfilePicture.next(result.settings.avatarPath);
  //     localStorage.setItem('UserAvatarPath', result.settings.avatarPath);
  //   }, (error) => {
  //     this.dialogService.openError(error.error.message, error.status);
  //   });
  // }

}
