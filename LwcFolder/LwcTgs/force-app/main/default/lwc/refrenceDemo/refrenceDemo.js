import { LightningElement } from 'lwc';

export default class RefrenceDemo extends LightningElement {

    alertValue(){
        let compChildRef=this.template.querySelector('c-ref-child');
        let property0ne=compChildRef.propOne;
        let propertyTwo=compChildRef.propTwo;

        console.log(property0ne);
        console.log(propertyTwo);
        compChildRef.alertValue();
    }
}