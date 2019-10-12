import { LightningElement, track, api } from 'lwc';

export default class LWC1 extends LightningElement {
    @api displayData='Type something';
    @track isChecked='false';
    @track input1;
    @track input2;
    @track result;
    handleInputChange(event){
            this.displayData=event.target.value;
    }
    

    handleClick(event){
        this.parseData(event);
        if(event.target.label=='Add')
        this.result = this.input1 + this.input2;
        else
        this.result = this.input1 - this.input2;
    }
    parseData(event){
        let inp=this.template.querySelectorAll("lightning-input");
        inp.forEach(function(element){
            if(element.name=="input1"){
                this.input1=parseInt(element.value);
                //alert('First value '+this.input1);
            }
            else if(element.name=="input2")
                this.input2=parseInt(element.value);
        },this);
    }

}