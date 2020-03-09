import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../Entities/IEmployee';
import { Router, ActivatedRoute } from '@angular/router';
import { fade } from '../animations';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  animations: [
    fade
  ],
})

export class CreateEmployeeComponent implements OnInit {

  Title: string;

  empForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl(''),
    age: new FormControl('', [Validators.max(100), Validators.min(18)]),
    gender: new FormControl(''),
    isActive: new FormControl('')
  });

  employeeList: IEmployee[];
  employee: IEmployee;
  formGroup: FormGroup;
  showSpinner = false;
  value: boolean;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {

    if (id === 0) {
      this.employee = {
        id: 0,
        fullName: null,
        age: 0,
        gender: null,
        isActive: true
      };
      this.Title = 'Create';
    } else {
      this.apiService.getEmployees1(id).subscribe(apiEmployee => {
        this.Title = 'Update';
        this.empForm.patchValue(apiEmployee);
      });
    }
  }

  saveEmp(): void {

    this.apiService.saveEmployee(this.empForm.value).subscribe(
      () => {
        this.empForm.reset();
      },
      (error: any) => { console.log(error); }
    );

    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);

    window.location.href = '/Employees';
  }

  updateEmp(empForm: FormGroup) {

    const tempEmployee: IEmployee = Object.assign({}, this.empForm.value);

    if (empForm.value.id === null) {
      const maxId = this.employeeList.reduce(function (a1, a2) {

        return (a1.id > a2.id) ? a1 : a2;
      }).id;
      this.empForm.value.id = maxId + 1;
      this.employeeList.push(this.employee);
    } else {
      this.apiService.updateEmployee(tempEmployee);
    }

    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);

    window.location.href = '/Employees';
  }

  backToEmployees() {
    this.router.navigate(['Employees']);
  }

}
