import { LightningElement,track } from 'lwc';

export default class DemoLwcFirstComp extends LightningElement {
    @track name;

    handleNameChange(event){
        this.name = event.target.value;
    }
}