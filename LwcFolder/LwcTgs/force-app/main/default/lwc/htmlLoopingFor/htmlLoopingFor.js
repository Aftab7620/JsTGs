import { LightningElement, track } from 'lwc';

export default class HtmlLoopingFor extends LightningElement {

    @track images=[
        {
        url:'https://www.google.com/imgres?q=sfdc%20image&imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1260%2F0*WhGt3L_CUICpFyyg.jpg&imgrefurl=https%3A%2F%2Fmedium.com%2Fjanbask-training-learn-grow%2Fwhat-is-sfdc-83d14b8ca5db&docid=QiNtNSMPWaBUuM&tbnid=eig0NUPqzSzB2M&vet=12ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCAQAA..i&w=630&h=528&hcb=2&ved=2ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCAQAA',
        show:true
        },
        {
            url:'https://www.google.com/imgres?q=sfdc%20image&imgurl=https%3A%2F%2Fblog.educationnest.com%2Fwp-content%2Fuploads%2F2023%2F02%2FEN-23-11-2022-2-1-copy.jpg&imgrefurl=https%3A%2F%2Fblog.educationnest.com%2Fsfdc-meaning-a-deep-dive-into-what-sfdc-is%2F&docid=6iq6lO15xdl5HM&tbnid=F46YHHOboRdcHM&vet=12ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECB8QAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECB8QAA',
            show:true
        
        },
        {
            url:'https://www.google.com/imgres?q=sfdc%20image&imgurl=https%3A%2F%2Fsfdcdevelopers.com%2Fwp-content%2Fuploads%2F2019%2F12%2FMobile.png&imgrefurl=https%3A%2F%2Fsfdcdevelopers.com%2F&docid=eIObOiMQptlncM&tbnid=h1gYwewHycG7XM&vet=12ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCMQAA..i&w=294&h=278&hcb=2&ved=2ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCMQAA',
            show:true

        },
        {
            url:'https://www.google.com/imgres?q=sfdc%20image&imgurl=https%3A%2F%2Fdata-flair.training%2Fblogs%2Fwp-content%2Fuploads%2Fsites%2F2%2F2018%2F08%2FSFDC-Services-and-Products-01.jpg&imgrefurl=https%3A%2F%2Fdata-flair.training%2Fblogs%2Fsfdc%2F&docid=nOE_XW89c2m-6M&tbnid=BjYH-LI6AfWzAM&vet=12ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCIQAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwilnLKVtq-PAxVm2TgGHbrMGUwQM3oECCIQAA',
            show:true

        }    
    ]
}