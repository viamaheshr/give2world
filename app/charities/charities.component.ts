import { Component, OnInit } from '@angular/core';

import { CharityService } from '../shared/charity.service';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {

  constructor(private cService: CharityService) { }

  ngOnInit() {
  }

}
