import {  LightningElement } from 'lwc';

export default class ChildCompCtoP extends LightningElement {

    input;

    handleChange(event){
        this.input=event.target.value;
        let sendData=new CustomEvent('typing',{detail:this.input});
        this.dispatchEvent(sendData);
    }
}