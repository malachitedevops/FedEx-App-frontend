import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
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

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.dropDown = new FormControl();
    this.userNameLocal = this.authenticationService.getUsernameLocal();
    this.userPicturePath = this.authenticationService.getUserAvatarLocal();
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
  }

  onlogout(route: string) {
    this.authenticationService.logoutUserService();
    this.router.navigate([route]);
  }

  onRedirect() {
    this.router.navigate(['/home']);
  }
}
