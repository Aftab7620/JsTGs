import { LightningElement } from 'lwc';

export default class ConditonalRendLwc extends LightningElement {

    show=false;

    handleClick(){
        this.show=!this.show;
    }
}