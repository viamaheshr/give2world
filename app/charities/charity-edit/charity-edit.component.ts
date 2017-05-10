import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Charity } from '../../charity.model';

@Component({
  selector: 'app-charity-edit',
  templateUrl: './charity-edit.component.html',
  styleUrls: ['./charity-edit.component.css']
})
export class CharityEditComponent implements OnInit {
  @ViewChild('f') charityForm: NgForm;

  onSubmit (form: NgForm) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
