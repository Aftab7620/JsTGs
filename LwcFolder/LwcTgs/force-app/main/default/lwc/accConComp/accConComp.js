import { LightningElement } from 'lwc';
import insertData from '@salesforce/apex/AccountConClass.insertAcc';

export default class AccConComp extends LightningElement {
    accData;
    firstName;
    lastName;

    handleAccount(event) {
        this.accData = event.detail;
    }

    handleFname(event) {
        this.firstName = event.detail;
    }

    handleLname(event) {
        this.lastName = event.detail;
    }

    handleSubmit() {
        insertData({ accName: this.accData, Fname: this.firstName, Lname: this.lastName })
            .then(result => {
                console.log('Inserted Account Id: ', result);
                alert('Account Inserted');
            })
            .catch(error => {
                console.error('Error: ', error);
                alert('Account not Inserted');
            });
    }
}
