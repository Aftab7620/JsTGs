import { LightningElement } from 'lwc';

export default class LwcDisconnectedCall extends LightningElement {

    dummyData = 'Hello World';
    showData = true;

    handleClick() {
        this.showData = !this.showData;
    }

    constructor() {
        super();
        console.log('Constructor called');
    }


    connectedCallback() {
        console.log('Connected Callback called');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback called');
    }

    renderedCallback() {
        console.log('Rendered Callback called');
    }

    errorCallback(error, stack) {
        console.log('Error Callback called');
        console.log(error);
        console.log(stack);
    }

    handleChange(event) {
        this.dummyData = event.target.value;

    }
}