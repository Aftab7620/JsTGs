import { LightningElement } from 'lwc';

export default class ParentCompCtoP extends LightningElement {

    typedval;

    handleChange(event){
        this.typedval=event.detail;
        console.log(this.typedval);
    }
}