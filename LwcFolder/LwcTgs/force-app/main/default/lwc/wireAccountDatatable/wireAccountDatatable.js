import { LightningElement, track, wire } from 'lwc';
import acData from '@salesforce/apex/accountWireClass.getAccounts';

export default class WireAccountDatatable extends LightningElement {

    input;

    @track colomn=[
        {label}
    ]

    handleName(event){
        this.input=event.target.value;
    }

    @wire(acData,{ip:'$input'})
    wiredAcData;
}