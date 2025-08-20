import { LightningElement,track,wire } from 'lwc';
import wireData from '@salesforce/apex/wireAccountClass.getAccountsWire';

export default class WireDataTableTask extends LightningElement {

    @track data=[];
    @track colomn=[
        { label: 'Account Id', fieldName: 'Id', type: 'text' },
        {label: 'Account Name',fieldName: 'Name',type: 'text'},
        {label: 'Account Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Description', fieldName: 'Description', type: 'text' },
        {
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                name: 'delete',
                variant: 'destructive'
            }
        }
    ]

    @wire(wireData)
    acData({error,data}) {
        if(data){
            this.data=data;
        }
        else if(error){
            console.log(error);
        }
    }
}