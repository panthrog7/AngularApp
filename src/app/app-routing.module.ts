import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsGuardService } from './services/employee-details-guard.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ActiveEmployeesComponent } from './active-employees/active-employees.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';
import { CreateEmployeeCanDeactivateGuardGuard } from './guards/create-employee-can-deactivate-guard.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: 'Home', component: HomeComponent },
  { path: 'Employees', component: EmployeesComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent, canActivate: [EmployeeDetailsGuardService], canDeactivate: [CreateEmployeeCanDeactivateGuardGuard] },
  { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
  { path: 'ActiveEmployees', component: ActiveEmployeesComponent },
  { path: 'InactiveEmployees', component: InactiveEmployeesComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
