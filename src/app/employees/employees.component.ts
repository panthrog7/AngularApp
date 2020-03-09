import { fade } from './../animations';
import { IEmployee } from './../Entities/IEmployee';
import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { ActiveEmployeesComponent } from '../active-employees/active-employees.component';
import { InactiveEmployeesComponent } from '../inactive-employees/inactive-employees.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  animations: [
    fade
  ],

})
export class EmployeesComponent implements OnInit {

  constructor(private apiService: ApiService,
    private messageService: MessageService,
    private router: Router,
    public dialog: MatDialog) {

  }

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  isActive: boolean = true;
  isLoading: boolean = true;
  dataSource: MatTableDataSource<IEmployee>;
  displayedColumns = ['id', 'fullName', 'age', 'gender', 'isActive', 'edit', 'delete'];
  toBeDeleted: IEmployee;

  public onSuccessNotMessage(title: string, message: string): void {
    this.messageService.onSuccess(title, message);
  }

  public onWarnNotMessage(title: string, message: string): void {
    this.messageService.onWarn(title, message);
  }

  public ngOnInit(): void {
    this.isLoading = false;

    this.dataSource = new MatTableDataSource([]);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.apiService.getEmployees().toPromise()
      .then(data => {
        this.dataSource.data = data.employees;
      });
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  public editEmployee(employeeToEdit: IEmployee): void {
    this.router.navigate(['/edit', employeeToEdit.id]);
  }

  public deleteEmployee1(employee: IEmployee): void {
    this.onSuccessNotMessage('Success', 'Employee Deleted');

    this.apiService.deleteEmployee(employee.id).subscribe(Response => {

      const index = this.dataSource.data.indexOf(employee);
      this.dataSource.data.splice(index, 1);
    });

  }

  public noDelete(): void {
    this.onWarnNotMessage('Warning', 'Employee not Deleted');
  }

  public confirmDelete(employee: IEmployee): void {
    this.toBeDeleted = employee;
  }

  public showDetails(employeeToEdit: IEmployee): void {

    const dialogRef = this.dialog.open(EmployeeDetailsComponent, {
      width: '600px',
      data: employeeToEdit
    });

  }

  public activeMembers(): void {
    const dialogRef = this.dialog.open(ActiveEmployeesComponent, {
      width: '600px',
      data: {
        data1: this.dataSource.data.filter(x => x.isActive).length,
        data2: JSON.stringify(this.dataSource.data.filter(x => x.isActive))
      },
      panelClass: 'active_class'
    });
  }

  public inactiveMembers(): void {
    const dialogRef = this.dialog.open(InactiveEmployeesComponent, {
      width: '600px',
      data: {
        data1: this.dataSource.data.filter(x => !x.isActive).length,
        data2: JSON.stringify(this.dataSource.data.filter(x => !x.isActive))
      },
      panelClass: 'inactive_class'
    });
  }
}
