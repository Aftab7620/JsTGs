import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactSearchChild extends LightningElement {

    @api contacts;
    @track showModal = false;
    @track selectedContactId;

    acceptedFormats = ['.pdf', '.png', '.jpg', '.jpeg', '.docx'];

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email' },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Account', fieldName: 'Account.Name' },
        {
            type: 'button',
            typeAttributes: {
                label: 'View Details',
                name: 'view_details',
                variant: 'brand'
            }
        }
    ];

    handleRowAction(event) {
        if (event.detail.action.name === 'view_details') {
            this.selectedContactId = event.detail.row.Id;
            this.showModal = true;
        }
    }

    handleSave() {
        this.showToast('Success', 'Contact updated successfully', 'success');
        this.closeModal();
    }

    closeModal() {
        this.showModal = false;
        this.selectedContactId = null;
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}

