import { LightningElement, track, wire } from 'lwc';
import conData from '@salesforce/apex/conClass.getAccounts';

export default class DemoWireCall extends LightningElement {

    @track column=[
        {label:'Name',fieldName:'Name'},
        {label:'Type',fieldName:'Type'},
        {label:'Phone',fieldName:'Phone'}]

    @track ac=[];

    @wire(conData)
    wiredData({data,error}){
        if(data){
            this.ac=data;

    }


}
}