import { api, LightningElement } from 'lwc';

export default class ChildCompCtoP extends LightningElement {

    @api input='';

    handleChange(event){
        this.input=event.target.value;
        let sendData=new CustomEvent('typing',{detail:this.input});
        this.dispatchEvent(sendData);
    }
}