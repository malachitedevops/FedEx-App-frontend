import { Component, OnInit, Input } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {
  @Input() subject: string ;
  private classCode: string = '10001';
  public homeworks: object[];

  constructor(
    private homeworkService: HomeworkService,
  ) { }

  ngOnInit() {
    this.getHomeworkList(this.subject)
  }

  ngOnChanges(){
    this.getHomeworkList(this.subject)

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

}
