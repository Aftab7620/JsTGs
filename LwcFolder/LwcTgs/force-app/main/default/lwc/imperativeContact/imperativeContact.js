import { LightningElement } from 'lwc';
import conData from '@salesforce/apex/imperativeContactClass.insertContact';

export default class ImperativeContact extends LightningElement {

    firstName='';
    lastName='';
    contact='';
    

    handleFname(event){
        this.firstName=event.target.value;
    }

    handleLname(event){
        this.lastName=event.target.value;
    }

    handlePhone(event){
        this.contact=event.target.value;
    }

    handleSubmit(){
        conData({Fname:this.firstName,Lname:this.lastName,phone:this.contact})
        .then(result => {
            alert('inserted');
        })
        .catch(error => {
            console.log(error);
        })
        

    }
}