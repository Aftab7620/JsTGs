import { LightningElement, track, wire } from 'lwc';
import conData from '@salesforce/apex/ContactSearchController.searchForContacts';

export default class StdComboBoxComp extends LightningElement {

    @track txt = '';                     
    @track data = [];                   
   @track valueChoosen='';  

   
    @wire(conData, {searchText:'$txt'})
    contacts({ error, data }) {
        if (data) this.data = data.map(name => ({label:name.Name,value:name.Name }));
            if (this.data.length === 0) {
                this.data = [{ label: 'No contacts found', value: '' }];
            }
        else if (error) {
           console.error('Error retrieving contacts:', error);
        }
    }

    handleChange(event) {
        this.txt = event.target.value;
    }

   
    handleSelect(event) {
        this.valueChoosen = event.detail.value;  
        
    }
}
