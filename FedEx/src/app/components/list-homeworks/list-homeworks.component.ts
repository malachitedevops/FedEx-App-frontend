import { Component, OnInit, Input } from '@angular/core';

import { HomeworkService } from '../../services/homework.service';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-list-homeworks',
  templateUrl: './list-homeworks.component.html',
  styleUrls: ['./list-homeworks.component.sass']
})
export class ListHomeworksComponent implements OnInit {


  private classCode: string;
  private homeworks: object[];

  subject: string = 'Math';
  constructor(
    private homeworkService: HomeworkService, private router: Router, private classService: ClassService
  ) { }

  ngOnInit() {
    
    this.classService.selectedClass.subscribe(value => {
      this.classCode = value;
      this.homeworkService.getHomeworks(this.classCode)
    .subscribe((homeworks: any) => {
      this.homeworks = homeworks;
    });
    })
  }

  selectHomework(homework) {
    this.router.navigate([`/homework`], { queryParams: { homeworkId: homework._id } });
  }

}
