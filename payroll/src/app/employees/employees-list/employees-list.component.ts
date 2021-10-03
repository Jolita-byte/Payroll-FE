import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: any;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
        this.employeesService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
