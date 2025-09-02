import { LightningElement } from 'lwc';

export default class CtopChildComp extends LightningElement {

    dummyData;

    handleChange(event){
        this.dummyData = event.target.value;
        let transfer=new CustomEvent('transfer',{detail:this.dummyData});
        this.dispatchEvent(transfer);
    }
}
