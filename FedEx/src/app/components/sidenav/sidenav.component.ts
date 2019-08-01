import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupComponent } from '../popup/popup/popup.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  getRoleFromLocal():boolean {
    if(localStorage.getItem('role') === 'teacher'){
      return true;
    }else{
      return false;
    }
  }

  openPopUp(action:string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const newClass = {
      teacher:'sadaasda',
      className:''
    }
    dialogConfig.data = {newClass};
    dialogConfig.width = '40vw';
    dialogConfig.height = 'auto';
    //dialogConfig.panelClass = 'popoup-dialog';
    this.dialog.open(PopupComponent, dialogConfig);
  }

}
