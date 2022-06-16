import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isUserLoggedIn = false;
  constructor(private authService : AuthServiceService){}
  ngOnInit(){
    let storeData = localStorage.getItem("isUserLoggedIn");
    (storeData != null && storeData == "true") ? this.isUserLoggedIn = true : this.isUserLoggedIn = false;
  }
  ngDoCheck(){
    let storeData = localStorage.getItem("isUserLoggedIn");
    (storeData != null && storeData == "true") ? this.isUserLoggedIn = true : this.isUserLoggedIn = false;
  }
  logout(){
    this.authService.logout()
  }
}
