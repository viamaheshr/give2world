import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Charity } from './charity.model';
//import { Subject } from 'rxjs/Subject';

@Injectable()
export class CharityService {

    //charitiesAdded = new Subject<Charity[]>();

    constructor(private http: Http) {}

    addCharity (charity: Charity) {
        //console.log(charity);
       return this.http.post('https://give2world-e16c3.firebaseio.com/charity.json', charity);
    }

    getCharities () {
        return this.http.get('https://give2world-e16c3.firebaseio.com/charity.json');
    }

}