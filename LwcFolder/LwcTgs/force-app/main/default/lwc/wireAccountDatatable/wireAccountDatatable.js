import { LightningElement, track, wire } from 'lwc';
import acData from '@salesforce/apex/accountWireClass.getAccounts';

export default class WireAccountDatatable extends LightningElement {

    input='';

    @track Account=[];


    @track colomn=[
        {label:'Account Name',fieldName:'Name'},
        {label:'Description',fieldName:'Description'}
 
    ]

    handleName(event){
        this.input=event.target.value;
    }

    @wire(acData,{ip:'$input'})
    wiredAcData({error,data}){
        if(data)
        {
        this.Account=data;
        }
    }
}
