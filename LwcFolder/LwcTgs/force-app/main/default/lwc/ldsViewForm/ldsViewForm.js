import { api, LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class LdsViewForm extends LightningElement {

    NameField=NAME_FIELD;
    PhoneField=PHONE_FIELD;

    @api recordId;
    @api objectApiName;
}