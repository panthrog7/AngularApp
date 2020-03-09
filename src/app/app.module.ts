import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import {
  MatDialogModule, MatSortModule, MatToolbarModule,
  MatIconModule, MatTableModule, MatFormFieldModule,
  MatButtonModule, MatInputModule, MatPaginatorModule,
  MatProgressBarModule, MatRadioModule, MatCardModule,
  MatProgressSpinnerModule, MatRippleModule, MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsGuardService } from './services/employee-details-guard.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ActiveEmployeesComponent } from './active-employees/active-employees.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';
import { CreateEmployeeCanDeactivateGuardGuard } from './guards/create-employee-can-deactivate-guard.guard';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    ActiveEmployeesComponent,
    InactiveEmployeesComponent,
    SignInComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),

    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,

    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ],
  providers: [
    ApiService,
    EmployeeDetailsGuardService,
    CreateEmployeeCanDeactivateGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
