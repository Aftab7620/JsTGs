import { LightningElement,track } from 'lwc';
import acData from '@salesforce/apex/AccountDisplayClass.getAccounts';

export default class DataTableTask extends LightningElement {
    @track data=[];
    @track columns =[
        {label: 'Account Name',fieldName: 'Name',type: 'text'},
        { label: 'Account Phone',fieldName: 'Phone',type:'text'},
        { label: 'Account Industry',fieldName: 'Industry',type:'text'},
        { label: 'Description', fieldName: 'Description', type: 'text' }
    ]

    handleClick(){
        acData().then(result=>{
            this.data=result;
        })
        .catch(error=>{
            console.log(error);
        })
    }
}