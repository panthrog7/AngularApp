import { IEmployee } from './../Entities/IEmployee';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee) {
  }

  ngOnInit() {
  }

  goToEmpForm() {
    this.router.navigate(['edit', this.data.id]);
  }

}
