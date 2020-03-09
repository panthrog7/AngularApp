import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(private employeeService: ApiService, private router: Router) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      if (+route.paramMap.get('id') > 0) {
        const employeeExists = !!await this.employeeService.getEmployees1(+route.paramMap.get('id')).toPromise();
      }
      return true;
    } catch (error) {
      this.router.navigate(['**'], {
        skipLocationChange: true
      });
      return false;
    }

  }
}
