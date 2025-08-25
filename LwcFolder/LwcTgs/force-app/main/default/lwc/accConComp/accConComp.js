import { LightningElement } from 'lwc';

export default class AccConComp extends LightningElement {

    accData='';
    handleAccount(event){
        this.accData=event.detail;
        console.log(this.accData);
    }

    firstName='';
    handleFname(event){
        this.firstName=event.detail;
    }

    lastName='';
    handleLname(event){
        this.lastName=event.detail;
    }
    
}