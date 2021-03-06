import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username:[null , Validators.required],
    pwd:[null , Validators.required]
  })
  constructor(
    private fb : FormBuilder,
    private authService : AuthServiceService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  get f1(){
    return this.loginForm.controls;
  }
  onSubmit(){
    this.authService.login(this.loginForm.value.username, this.loginForm.value.pwd)
         .subscribe( data => { 
           if(data) {
            this.router.navigate(['/product']);
           }else{
            this.toastr.warning('Invalid username and password');
            this.loginForm.reset()
           } 
      });
  }
}
