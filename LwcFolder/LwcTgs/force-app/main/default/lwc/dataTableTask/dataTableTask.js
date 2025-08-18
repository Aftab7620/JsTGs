import { LightningElement,track } from 'lwc';
import acData from '@salesforce/apex/AccountDisplayClass.getAccounts';

export default class DataTableTask extends LightningElement {
    @track data=[];
    @track columns =[
        { label: 'Account Id', fieldName: 'Id', type: 'text' },
        {label: 'Account Name',fieldName: 'Name',type: 'text'},
       { label: 'Account Phone', fieldName: 'Phone', type: 'phone' },

        { label: 'Description', fieldName: 'Description', type: 'text' }
    ]

    handleClick(){
        acData().then(result=>{
            this.data=result;
            console.log('Accounts:', result); // Debug
        })
        .catch(error=>{
            console.log(error);
        })
    }
}