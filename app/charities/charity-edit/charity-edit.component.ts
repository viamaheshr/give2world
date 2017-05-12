import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Charity } from '../../shared/charity.model';
import { CharityService } from '../../shared/charity.service';

@Component({
  selector: 'app-charity-edit',
  templateUrl: './charity-edit.component.html',
  styleUrls: ['./charity-edit.component.css']
})
export class CharityEditComponent implements OnInit {
  @ViewChild('f') charityForm: NgForm;

  constructor (private cService: CharityService) {}

  onSubmit (form: NgForm) {
    const value = form.value;
    const newCharity = new Charity(
        value.charityName,
        value.missionStatement,
        value.charityType,
        value.address1,
        value.address2,
        value.city,
        value.state,
        value.zipCode,
        value.contactPerson,
        value.email,
        value.password,
        value.phone,
        value.website
    );
    this.cService.addCharity(newCharity)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    form.reset();
  }

  ngOnInit() {
  }

}
