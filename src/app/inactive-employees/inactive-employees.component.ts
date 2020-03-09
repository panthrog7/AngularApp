import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IEmployee } from '../Entities/IEmployee';

@Component({
  selector: 'app-inactive-employees',
  templateUrl: './inactive-employees.component.html',
  styleUrls: ['./inactive-employees.component.css']
})
export class InactiveEmployeesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IEmployee) { }

  ngOnInit() {
  }

}
