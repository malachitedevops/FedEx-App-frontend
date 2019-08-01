import { Component, OnInit } from '@angular/core';

import { HomeworkService } from '../../services/homework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {


  private classCode: string = '10001';
  private homeworks: object[];

  subject: string = 'Math';
  constructor(
    private homeworkService: HomeworkService, private router: Router
  ) { }

  ngOnInit() {
    this.homeworkService.getHomeworks(this.classCode)
    .subscribe((homeworks: any) => {
      this.homeworks = homeworks;
      console.log(this.homeworks);
    });
  }

  selectHomework(homework) {
    console.log(homework._id)
    this.router.navigate([`/homework`], { queryParams: { homeworkId: homework._id } });
  }
}
