import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class AttendanceLogin extends LightningElement {
    @track showModal = false;
    @track mapMarkers;

    
    handleCheckIn() {
        this.getLocationAndSave('Check In');
    }

    handleCheckOut() {
        this.getLocationAndSave('Check Out');
    }

    getLocationAndSave(actionType) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let fields = {
                User__c: USER_ID,
                Lattitude__c	: pos.coords.latitude,
                Longitude__c	: pos.coords.longitude
            };

            let now = new Date().toISOString();
            if (actionType === 'Check In') {
                fields.Login_Time__c = now;
            } else {
                fields.Logout_Time__c = now;
            }

            createRecord({ apiName: 'Attendance__c', fields })
                .then(() => {
                    this.showToast('Success', `${actionType} saved`, 'success');
                    this.mapMarkers = [{
                        location: { Lattitude: pos.coords.latitude, Longitude: pos.coords.longitude },
                        title: `${actionType} Location`
                    }];
                    this.showModal = true;
                })
                .catch(() => {
                    this.showToast('Error', `Failed to save ${actionType}`, 'error');
                });
        });
    }

    openMap() {
        this.showModal = true;
    }
    closeMap() {
        this.showModal = false;
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
