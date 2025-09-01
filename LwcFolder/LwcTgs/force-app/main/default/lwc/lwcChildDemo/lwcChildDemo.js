import { LightningElement } from 'lwc';

export default class LwcChildDemo extends LightningElement {

    constructor(){
        super();
        console.log('Child Constructor');
    }

    connectedCallback(){
        console.log('Child Connected Callback');
    }

    renderedCallback(){
        console.log('Child Rendered Callback');
    }

    disconnectedCallback(){
        console.log('Child Disconnected Callback');
    }
    
}