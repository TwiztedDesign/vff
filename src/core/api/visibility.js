import {vffData} from '../../core/vffdata.js';


module.exports = {
    show        : (template) => {return vffData.show(template);},
    hide        : (template) => {return vffData.hide(template);},
    toggle      : (template) => {return vffData.toggle(template);}
};
