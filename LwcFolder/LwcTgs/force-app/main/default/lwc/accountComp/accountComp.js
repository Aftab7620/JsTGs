import { api, LightningElement } from 'lwc';

export default class AccountComp extends LightningElement {
    @api accname = '';

    handleAcc(event){
        this.accname = event.target.value;
        this.dispatchEvent(new CustomEvent('accdata', { detail: this.accname }));
    }
}
