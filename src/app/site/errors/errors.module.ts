import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import {Routes, RouterModule} from '@angular/router';

const routes:Routes = [
  {
    path:'404',component:ErrorsComponent
  },
  {
    path:'**', redirectTo:'/404'//c'est comme un try catch pour tt url erroné on redirige en interne vers 404
  }
];



@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorsModule { }
