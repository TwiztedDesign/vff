import UIElement from './uiElement';

const defaults = {
    value : '',
    options: [],
};

export default class UIDropdown extends UIElement{
    constructor(data){
        super(data, defaults);
        if(!this.value && this.options.length) this.value = this.options[0];
    }
}