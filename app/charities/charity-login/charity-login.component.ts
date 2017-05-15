import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-charity-login',
  templateUrl: './charity-login.component.html',
  styleUrls: ['./charity-login.component.css']
})
export class CharityLoginComponent implements OnInit {

  constructor(private aService: AuthService) { }

  ngOnInit() {
  }

  onSubmit (form: NgForm) {
    const value = form.value;
    this.aService.signinCharity(value.email, value.password);
  }

}
