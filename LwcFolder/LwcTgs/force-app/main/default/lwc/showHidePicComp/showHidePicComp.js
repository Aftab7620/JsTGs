import { LightningElement } from 'lwc';

export default class ShowHidePicComp extends LightningElement {

    show=false;

    handleClick(){
        this.show=!this.show;
    }
}