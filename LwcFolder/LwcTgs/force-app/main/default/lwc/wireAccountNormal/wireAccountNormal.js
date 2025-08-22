import { LightningElement,wire } from 'lwc';
import acData from '@salesforce/apex/accountWireClass.getAccounts';

export default class WireAccountNormal extends LightningElement {

    input;

    @wire(acData,{ip:'$input'})
    accData;

    handleName(event){
        this.input=event.target.value;
    }
}