import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastComp extends LightningElement {

    showErrorToast(){
        const evt=new ShowToastEvent({

            title:'Error',
            message:'This is an error message',
            variant:'error',
            mode:'dismissable'

        });
        this.dispatchEvent(evt);
    }

    showToast(){
        const evt=new ShowToastEvent({
            title:'Success',
            message:'This is a success message',
            variant:'success',
            mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showWarningToast(){
        const evt=new ShowToastEvent({
            title:'Warning',
            message:'This is a warning message',
            variant:'warning',
            mode:'sticky'
        });
        this.dispatchEvent(evt);
    }

   showInfoToast(){
        const evt = new ShowToastEvent({
        title: 'Toast Notificaiton Info',
        message: 'Please wait for some time, Data loading in background',
        variant: 'info',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
} 
}