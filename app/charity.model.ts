export class Charity {
    public charityName: string;
    public missionStatement: string;
    public charityType: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public zipCode: number;
    public contactPerson: string;
    public email: string;
    public password: string;
    public phone: string;
    public website: string;

    constructor (charityName: string, missionStatement: string, charityType: string, address1: string, address2: string, city: string, state: string, zipCode: number, contactPerson: string, email: string, password: string, phone: string, website: string) {
        this.charityName = charityName;
        this.missionStatement = missionStatement;
        this.charityType = charityType;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.contactPerson = contactPerson;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.website = website;
    }

}