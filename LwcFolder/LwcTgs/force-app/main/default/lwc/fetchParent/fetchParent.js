import { LightningElement, track } from 'lwc';
import searchContacts from '@salesforce/apex/ContactSearchController.searchContacts';

export default class fetchParent extends LightningElement {

    @track searchKey = '';
    @track contacts;

    handleSearchChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearch() {
        searchContacts({ searchKey: this.searchKey })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error('Error:', error);
                this.contacts = undefined;
            });
    }
}

