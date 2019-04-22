export class SpaOrder {

    firstName: string;
    lastName: string;
    address: string;
    country: string;
    zip: string;
    paymentType: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;


    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.country = '';
        this.zip = '';
        this.paymentType = '';
        this.cardNumber = '';
        this.expirationDate = '';
        this.cvv = '';
    }
}
