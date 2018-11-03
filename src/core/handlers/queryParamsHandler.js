import {vffData} from '../vffData.js';

function queryParams(data) {
    vffData.addQueryParams(data);

    if(data && data.cursor && data.cursor === '0'){

        // document.styleSheets[0].addRule('*', 'cursor: none !important');

        var css = '* { cursor: none !important; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
}

module.exports = {
    queryParams : queryParams
};

