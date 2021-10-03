import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesListComponent} from './employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: 'employees/employee-list',
    component: EmployeesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
