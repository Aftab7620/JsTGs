import { api, LightningElement } from 'lwc';

export default class AccountComp extends LightningElement {
    @api accname='';

    handleAcc(event){
        this.accname=event.detail.name;
        console.log(this.accname);
        let accDta=new CustomEvent('accdata',{detail:this.accname});
        this.dispatchEvent(accDta);
}
}