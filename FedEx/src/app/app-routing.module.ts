import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkCreationComponent } from './homework-creation/homework-creation.component';

const routes: Routes = [
  {path: 'createhomework', component: HomeworkCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
