import { LightningElement } from 'lwc';

export default class CtopParentComp extends LightningElement {

    demo;

    handleData(event){
        this.demo=event.detail;


    }

    
}