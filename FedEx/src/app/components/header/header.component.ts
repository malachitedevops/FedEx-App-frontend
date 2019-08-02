import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfilePictureService } from '../../services/profile-picture.service';
import { ClassService } from '../../services/class.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userNameLocal: string;
  public userPicturePath: string;
  public selectedClass: string;
  public classList: any;
  public teacherLoggedIn: boolean;
  private classesSub: Subscription;
  private userPictureSub: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private profilePictureService: ProfilePictureService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.userNameLocal = this.authenticationService.getUsernameLocal();
    this.userPicturePath = this.authenticationService.getUserAvatarLocal();
    this.userPictureSub = this.profilePictureService.getUserAvatarPath
      .subscribe((data) => {
        this.userPicturePath = data;
      });
    this.teacherLoggedIn = this.authenticationService.getUserRoleLocal() === 'teacher';
    this.classesSub = this.classService.getClasses()
    .subscribe((classes: object[]) => {
      this.classList = classes;
    });
  }

  ngOnDestroy() {
    this.classesSub.unsubscribe();
    this.userPictureSub.unsubscribe();
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

  onlogout(route: string) {
    this.authenticationService.logoutUserService();
    this.router.navigate([route]);
  }

  onRedirect() {
    this.router.navigate(['/home']);
  }
}
