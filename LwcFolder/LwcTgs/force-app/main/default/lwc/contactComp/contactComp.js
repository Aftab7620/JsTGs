import { api, LightningElement } from 'lwc';

export default class ContactComp extends LightningElement {

    @api fname='';
    @api lname='';

    handleFname(event){
        this.fname=event.target.value;
        let fnameData=new CustomEvent('fname',{detail:{fname:this.fname}});
        this.dispatchEvent(fnameData);
    }

    handleLname(event){
        this.lname=event.target.value;
        let lnameData=new CustomEvent('lname',{detail:this.lname});
        this.dispatchEvent(lnameData);
    }
}