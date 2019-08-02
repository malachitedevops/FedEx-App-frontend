import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfilePictureService } from '../../services/profile-picture.service';
import { ClassService } from '../../services/class.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  private dropDown: FormControl;
  private userPictureSub: Subscription;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private profilePictureService: ProfilePictureService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.dropDown = new FormControl();
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
      this.dropDown.valueChanges.subscribe(value => this.classService.selectClass(value));
      this.dropDown.setValue(this.classList[0].code)
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
    this.onRedirect(route);
  }
}
