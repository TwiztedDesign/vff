import UIElement from './uiElement';

const defaults = {
    value : [],
    options: [],
    config : {
        search : false,
        clearOnChange : false,
        itemsInView : 5
    }
};

export default class UIMultiselect extends UIElement{
    constructor(data){
        super(data, defaults);
    }
}