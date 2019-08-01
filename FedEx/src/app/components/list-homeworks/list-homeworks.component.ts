import { Component, OnInit } from '@angular/core';

import { HomeworkService } from '../../services/homework.service';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {


  private classCode: string = '10001';
  public homeworks: object[];

  subject: string = 'Math';
  constructor(
    private homeworkService: HomeworkService
  ) { }

  ngOnInit() {
    this.homeworkService.getHomeworks(this.classCode)
    .subscribe((homeworks: any) => {
      homeworks.map(homework => {
        homework.deadline = homework.deadline.split('T')[0];
        homework.created = homework.created.split('T')[0];
      })
      this.homeworks = homeworks;
    });
  }
}
