import { LightningElement } from 'lwc';
import insertData from '@salesforce/apex/AccountConClass.insertAcc';

export default class AccConComp extends LightningElement {

    accData='';
    handleAccount(event){
        this.accData=event.detail;
        console.log(this.accData);
    }

    firstName='';
    handleFname(event){
        this.firstName=event.detail;
    }

    lastName='';
    handleLname(event){
        this.lastName=event.detail;
    }


    handleSubmit(){
        insertData({accName:accData,Fname:this.firstName,Lname:this.lastName})
        .then(result=>{
            console.log(result);
            alert('Account Inserted');
        })
        .catch(error=>{
            console.log(error); 
            alert('Account not Inserted');})

    }
}