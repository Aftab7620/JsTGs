import { LightningElement } from 'lwc';

export default class LwcChildDemo extends LightningElement {

    testProp;

    constructor(){
        super();
        console.log('Child Constructor');
    }

    connectedCallback(){
        console.log('Child Connected Callback');
        console.log('check' +this.testProp.name);
    }

    renderedCallback(){
        console.log('Child Rendered Callback');
    }

    disconnectedCallback(){
        console.log('Child Disconnected Callback');
    }

}