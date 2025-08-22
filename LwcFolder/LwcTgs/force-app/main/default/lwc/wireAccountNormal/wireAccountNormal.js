import { LightningElement,wire } from 'lwc';
import acData from '@salesforce/apex/accountWireClass.getAccounts';

export default class WireAccountNormal extends LightningElement {

    input;

    @wire(acData)
    accData;

    handleName(event){
        this.input=event.target.value;
    }
}