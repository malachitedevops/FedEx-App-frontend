import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  getRoleFromLocal():boolean {
    if(this.authenticationService.getUserRoleLocal() === 'teacher'){
      return true;
    }else{
      return false;
    }
  }

  openPopUp(action:string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const newClass = {
      teacher:'',
      className:''
    }
    dialogConfig.data = {newClass};
    dialogConfig.width = '30vw';
    this.dialog.open(PopupComponent, dialogConfig);
  }

  createHomework(){
    this.router.navigate(['/']);
  }

}
