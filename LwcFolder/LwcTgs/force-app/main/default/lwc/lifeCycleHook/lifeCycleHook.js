import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {

    dummy='Test';

    constructor(){
        super();
        console.log('Constructor Called');
    }

    connectedCallback(){
        console.log('Connected Callback Called');
    }

    renderedCallback(){
        console.log('Rendered Callback Called');
    }

    disconnectedCallback(){
        console.log('Disconnected Callback Called');
    }

    handleChange(event){
        this.dummy=event.target.value;
    }
}