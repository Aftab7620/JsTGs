import { LightningElement,track,wire } from 'lwc';
import wireData from '@salesforce/apex/wireAccountClass.getAccountsWire';
import delAcData from '@salesforce/apex/wireAccountClass.deleteAccount';

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

    handleAction(event){
        const row = event.detail.row;
        console.log('Deleting Account Id:', row.Id);  


        delAcData({accId:row.Id})
        .then(() => {
            console.log('Account deleted successfully');
            this.data = this.data.filter(acc => acc.Id !== row.Id);
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
}
}
