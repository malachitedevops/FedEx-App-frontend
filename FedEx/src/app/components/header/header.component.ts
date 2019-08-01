import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public userNameLocal: string = 'tomiT';
  public userPicturePath: string = 'https://fedeximages-51d4a1c.s3.amazonaws.com/avatars/teacher.png';
  public selectedClass: string;
  public classList: any = [
    {name: 'Class 1A'},
    {name: 'Class 3B'},
    {name: 'Class 4C'}
  ];
  public teacherLoggedIn: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRedirect(route: string) {
    this.router.navigate([route]);
  }

  onlogout(route: string) {
    // this.authenticationService.logoutUserService();
    this.onRedirect(route);
  }

}
