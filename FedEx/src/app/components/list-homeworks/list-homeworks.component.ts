import { Component, OnInit } from '@angular/core';

import { HomeworkService } from '../../services/homework.service';
// import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {

  private selectedSubject:string;
  private classCode: string = '10001';
  public homeworks: object[];

  subject: string = 'Math';
  constructor(
    private homeworkService: HomeworkService,
    // private sideNav: SidenavComponent
  ) { }

  ngOnInit() {
    this.getHomeworkList()
  }

  getHomeworkList(subject='All'){
        // this.sideNav.subjectDataChange().subscribe(subject=>{this.selectedSubject=subject})
        this.homeworkService.getHomeworks(this.classCode)
        .subscribe((homeworks: any) => {
          homeworks=homeworks.filter((e)=>e.subject===subject)
          console.log(homeworks);
          homeworks.map(homework => {
            homework.deadline = homework.deadline.split('T')[0];
            homework.created = homework.created.split('T')[0];
          })
          this.homeworks = homeworks;
        });
  }

}
