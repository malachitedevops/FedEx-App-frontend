import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeworkFullComponent } from './components/homework-full/homework-full.component';
import { ListHomeworksComponent } from './components/list-homeworks/list-homeworks.component';

const routes: Routes = [
  {path: 'home', component: ListHomeworksComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'homework', component: HomeworkFullComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
