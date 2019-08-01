import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../services/homework.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private classCode: string = '10001';
  private homeworks: object[];
  constructor(private homeworkService: HomeworkService) { }

  ngOnInit() {
    this.homeworkService.getHomeworks(this.classCode)
    .subscribe((homeworks: any) => {
      this.homeworks = homeworks;
      console.log(this.homeworks);
    });
  }

}
