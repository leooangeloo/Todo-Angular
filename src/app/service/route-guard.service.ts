import { HardcodeAuthService } from './hardcode-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public hardcodeAuthService: HardcodeAuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodeAuthService.isUserLoggedIn())
      return true;

    //Route user to login page if false
    this.router.navigate(['login']);
    
    return false;
  }
}
