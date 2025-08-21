import { LightningElement } from 'lwc';

export default class ComboBox extends LightningElement {

    selectedVal='';
    get items() {
        return [
            {
                "label": "INDIA",
                "value": "IN"
            },
            {
                "label": "USA",
                "value": "US"
            },
            {
                "label": "AUSTRALIA",
                "value":"AU"
            },
            {
                "label": "NEWZEALAND",
                "value":"NZ"
}]
    }

    handleClick(event){

        this.selectedVal=event.target.value;
    }
}