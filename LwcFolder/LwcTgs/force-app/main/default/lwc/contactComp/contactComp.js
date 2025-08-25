import { api, LightningElement } from 'lwc';

export default class ContactComp extends LightningElement {
    @api fname = '';
    @api lname = '';

    handleFname(event){
        this.fname = event.target.value;
        this.dispatchEvent(new CustomEvent('fname',{detail:this.fname}));
    }

    handleLname(event){
        this.lname = event.target.value;
        this.dispatchEvent(new CustomEvent('lname',{detail:this.lname}));
    }
}
