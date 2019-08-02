import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ListHomeworksComponent } from '../list-homeworks/list-homeworks.component'
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  subjects=['All','Biology','History','IT','Literature','Math','Physics','English'];
  private subjectChange = new BehaviorSubject<string>('');

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService,
    private homeworkList: ListHomeworksComponent,
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

  createHomework() {
    console.log('hello');
    this.router.navigate(['/createhomework']);
  }

  subjectDataChange(){
    return this.subjectChange.asObservable();
  }

  filterSubject(subject){
    console.log(subject);
    this.homeworkList.getHomeworkList(subject)
    this.subjectChange.next(subject)
    // this.subjectDataChange()
  }
}
