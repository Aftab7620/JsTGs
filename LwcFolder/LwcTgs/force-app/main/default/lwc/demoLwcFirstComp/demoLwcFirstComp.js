import { LightningElement,track } from 'lwc';

export default class DemoLwcFirstComp extends LightningElement {
    @track name;

    setName(event){
        this.name = event.target.value;
    }
}