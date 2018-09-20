import UIElement from './uiElement';

const defaults = {
    value   : '0',
    min     : 0,
    max     : 0,
    step    : 1
};

export default class UIRange extends UIElement{
    constructor(data){
        super(data, defaults);
    }
}