import { LightningElement, track } from 'lwc';
import conData from '@salesforce/apex/ContactSearchController.searchForContacts';

export default class StdComboBoxComp extends LightningElement {
    @track txt = '';                     
    @track data = [];                   
    @track valueChoosen = '';  

    handleChange(event) {
        this.txt = event.target.value;

        conData({ searchText: this.txt })
            .then(result => {
                if (result && result.length > 0) {
                    
                    this.data = result.map(c => ({ label: c.Name, value: c.Name }));
                } else {
                    this.data = [{ label: 'No contacts found', value: '' }];
                }
            })
            .catch(error => {
                console.error('Error retrieving contacts:', error);
                this.data = [{ label: 'Error retrieving contacts', value: '' }];
            });
    }

    handleSelect(event) {
        this.valueChoosen = event.detail.value;
    }
}
