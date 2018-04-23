import { NgForm } from '@angular/forms';
import { RegisterUserModel } from './registerUserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './../../Security/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: RegisterUserModel = new RegisterUserModel();

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }



  register(): void {
    this.router.navigate(['dashboard']);
  }
}
