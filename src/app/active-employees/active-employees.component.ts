import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { IEmployee } from '../Entities/IEmployee';

@Component({
  selector: 'app-active-employees',
  templateUrl: './active-employees.component.html',
  styleUrls: ['./active-employees.component.css']
})
export class ActiveEmployeesComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: IEmployee) { }

  ngOnInit() {

  }

}
