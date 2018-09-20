import {deepExtend} from '../../utils/helpers';

export default class UIElement{
    constructor(data, defaults) {
        defaults = defaults || {};
        Object.assign(this, defaults);
        deepExtend(this, data);
    }
}