import { LightningElement,track } from 'lwc';
import acData from '@salesforce/apex/AccountDisplayClass.getAccounts';
import delData from '@salesforce/apex/AccountDisplayClass.delAccount';

export default class DataTableTask extends LightningElement {
    @track data=[];
    @track columns =[
        { label: 'Account Id', fieldName: 'Id', type: 'text' },
        {label: 'Account Name',fieldName: 'Name',type: 'text'},
       { label: 'Account Phone', fieldName: 'Phone', type: 'phone' },

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

    handleClick(){
        acData().then(result=>{
            this.data=result;
            console.log('Accounts:', result); // Debug
        })
        .catch(error=>{
            console.log(error);
        })
    }

actionHandle(event) {
    const row = event.detail.row;
    console.log('Deleting Account Id:', row.Id);  // 🔎 Debug

    delData({ accId: row.Id })  // 👈 make sure spelling matches Apex param "accId"
        .then(() => {
            console.log('Account deleted successfully');
            this.data = this.data.filter(acc => acc.Id !== row.Id);
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
}


}