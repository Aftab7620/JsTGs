import { LightningElement } from 'lwc';

export default class Lwcref extends LightningElement {

    alertValue(){
        for(let key in this.refs){
            let compChildRef=this.refs[key];
            let property0ne=compChildRef.propOne;
            let propertyTwo=compChildRef.propTwo;
            
            console.log(property0ne);
            console.log(propertyTwo);
            compChildRef.alertValue();
        }
    }
}