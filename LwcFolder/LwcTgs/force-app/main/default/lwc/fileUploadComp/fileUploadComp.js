import { api, LightningElement } from 'lwc';

export default class FileUploadComp extends LightningElement {

    @api recordId;

    get accpetedFormats(){
        return['.pdf','.png']
    }

    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        alert('File uploaded Sucessfully');
    }
}