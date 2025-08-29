import { api, LightningElement } from 'lwc';

export default class RefChild extends LightningElement {

    @api propOne;
    @api propTwo;

    @api alertValue(){
     alert('property one :' + this.propOne+'\n' +'property two :' + this.propTwo);    
    }
}