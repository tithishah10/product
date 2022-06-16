import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserLoggedIn: boolean = false;

   login(userName: string, password: string):Observable<any> {
      this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
      return of(this.isUserLoggedIn).pipe(
          delay(100),
          tap(val => { 
          })
      );
   }

   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
      this.router.navigate(['/login'])
   }
  constructor(private router: Router) { }
}
