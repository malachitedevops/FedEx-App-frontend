import { Component, OnInit, Input } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {
  @Input() subject: string ;
  public homeworks: object[];
  private classCode: string;

  constructor(
    private homeworkService: HomeworkService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private classService: ClassService
  ) { }

  ngOnInit() {
    if (this.authenticationService.getUserRoleLocal() === 'teacher'){
      this.classService.selectedClass.subscribe(data => {
        this.classCode = data;
        this.getHomeworkList();
      })
    } else {
      this.classCode = this.authenticationService.getUserClassCodeLocal();
      this.getHomeworkList();
    }
  }

  ngOnChanges(){
    this.getHomeworkList(this.subject);
  }

  getHomeworkList(subject='All'){
        this.homeworkService.getHomeworks(this.classCode)
        .subscribe((homeworks: any) => {
          if (subject!=='All'){
            homeworks=homeworks.filter((e)=>e.subject===subject)
          }
          homeworks.map(homework => {
            homework.deadline = homework.deadline.split('T')[0];
            homework.created = homework.created.split('T')[0];
          })
          this.homeworks = homeworks;
        });
  }

  selectHomework(homework) {
    this.router.navigate([`/homework`], { queryParams: { homeworkId: homework._id } });
  }
}
