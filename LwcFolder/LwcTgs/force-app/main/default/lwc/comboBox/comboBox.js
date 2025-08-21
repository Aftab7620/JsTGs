import { LightningElement } from 'lwc';

export default class ComboBox extends LightningElement {

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
}