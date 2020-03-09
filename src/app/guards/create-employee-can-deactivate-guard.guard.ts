import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { CanDeactivate } from '@angular/router/src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardGuard implements CanDeactivate<CreateEmployeeComponent> {

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.empForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }


}
