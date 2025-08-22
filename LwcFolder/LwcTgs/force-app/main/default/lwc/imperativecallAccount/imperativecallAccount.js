import { LightningElement } from 'lwc';
import acData from '@salesforce/apex/imperCallAccount.insertAcc';

export default class ImperativecallAccount extends LightningElement {
    input='';

    handleName(event){
        this.input=event.target.value;
    }

    insertAcc(){
        acData({accName:this.input})
        .then(result => {
            alert('inserted');
        })
        .catch(error => {
            alert('error');})
    }
}