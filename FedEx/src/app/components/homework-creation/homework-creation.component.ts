import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeworkCreateService } from '../../services/homework-create.service';
import { Homework } from '../../models/homework.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-homework-creation',
  templateUrl: './homework-creation.component.html',
  styleUrls: ['./homework-creation.component.sass']
})
export class HomeworkCreationComponent implements OnInit {

  public homeworkCreationForm: FormGroup;
  public subjects = ['Math','IT','History','Literature','Physics','English', 'Biology']
  public classList;
  public deadlineDate: Date;
  homework: Homework;

  constructor(
    private formBuilder: FormBuilder,
    private createHomeworkService: HomeworkCreateService,
    private autService: AuthenticationService,
    private classService: ClassService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.classService.getClasses()
    .subscribe((classes: object[]) => {
      this.classList = classes;
    });
    this.homeworkCreationForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      shortDesc: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      content: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      picker: new FormControl(new Date(), [Validators.required]),
    },{validator: this.dateCheck('picker')});
  }

  public createHomework(form: FormGroup) {
    this.autService.getUsernameLocal()
    console.log(form.value.class.name);
    this.homework = {
      deadline: form.value.picker,
      title: form.value.title,
      shortDesc: form.value.shortDesc,
      content: form.value.content,
      created: Date.now(),
      subject: form.value.subject,
      teacherName: this.autService.getUsernameLocal(),
      className: form.value.class,
      classCode: this.classList.filter((e)=>e.name===form.value.class)[0].code,
      solutions: ''
    };
    this.createHomeworkService.sendNewHomework(this.homework)
    .subscribe(data => {
      console.log('homework sent')
      this.router.navigate(['/home'])
    })
  }

  public hasError(controlName: string, errorName: string) {
    return this.homeworkCreationForm.controls[controlName].hasError(errorName);
  }

  private dateCheck(deadline: string){
    return (group: FormGroup): {[key: string]: any} => {
      let d = group.controls[deadline];
      let a = Date.now();
      if (d.value < a) {
        return {
          dates: 'Date should be in later than actual date'
        };
      }
      return {};
     }
  }


  public textHasError(controlName: string, errorName: string) {
    return this.homeworkCreationForm.controls[controlName].hasError(errorName);
  }

  signInWithGoogle(): void {
  }

}
