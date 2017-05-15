import { Injectable } from '@angular/core';

import { Charity } from './charity.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharityService {
    charities: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
    }

    addCharity (charity: Charity) {
       this.charities.push(charity);
    }

    // getCharities () {
    //     return this.charities;
    // }

    isValidCharity (email: string, password: string) {
        const queryObservable = this.database.list('/charities', { query: {orderByChild: 'email', equalTo: email}});
        queryObservable.subscribe(results => {
            console.log(results[0].password);
        });
    }

}