import { LightningElement } from 'lwc';

export default class RefQueryAll extends LightningElement {

    alertValue(){
        let compChildRef=this.template.querySelectorAll('c-ref-child');
        console.log(compChildRef);

        for(let i=0;i<compChildRef.length;i++){
            let property0ne=compChildRef[i].propOne;
            let propertyTwo=compChildRef[i].propTwo;
            console.log(property0ne);
            console.log(propertyTwo);
            compChildRef[i].alertValue();
        }
    }
}