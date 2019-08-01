import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HomeworkCreationComponent } from './components/homework-creation/homework-creation.component';
import { HomeworkFullComponent } from './components/homework-full/homework-full.component';
import { ListHomeworksComponent } from './components/list-homeworks/list-homeworks.component';

const routes: Routes = [
  {path: 'home', component: ListHomeworksComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homework', component: HomeworkFullComponent},
  {path: 'createhomework', component: HomeworkCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
