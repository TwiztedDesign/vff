import {setByPath, defer} from '../../utils/helpers.js';
import {vffData} from '../vffData.js';
import {EXPOSE_DELIMITER} from '../consts';
import {VFF_EVENT} from '../../utils/events';

function update(data){

    let promises = [];
    for(let templateName in data){
        let template = vffData.getTemplate(templateName);
        if(template){
            let deferred = defer();
            template._runMiddleware(data[templateName]).then((result) => {
                vffData.registerTemplate(templateName, result);
                for(let key in result){
                    updateDom(template, key, result[key], result.__timecode__);
                }
                vffData.updateCB();
                deferred.resolve();
            });
            promises.push(deferred.promise);
        }
        // if(['mousemove', 'mousedown', 'mouseup','click'].indexOf(templateName) ){
        if(['click'].indexOf(templateName) > -1 ){
            var target = lookupElementByXPath(data[templateName].target);
            // data[templateName].target = target;
            data[templateName].bubbles = true;
            data[templateName].detail = {vff: 'vff'};
            data[templateName].ctrlKey = true;
            // if(vff.mode === 'normal' || vff.mode === 'controller-program') {
                target.dispatchEvent(new MouseEvent(templateName, data[templateName]));
                // target.dispatchEvent(new CustomEvent(templateName, {bubble: true, detail : data[templateName]}));
            // }
        }
    }

    document.dispatchEvent(new CustomEvent(VFF_EVENT, { detail: data }));
    return Promise.all(promises);
}

function lookupElementByXPath(path) {
    var evaluator = new XPathEvaluator();
    var result = evaluator.evaluate(path, document.documentElement, null,XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return  result.singleNodeValue;
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function updateDom(template, control, value, timecode){
    let dom = template.$element(control.split(EXPOSE_DELIMITER)[0]);
    if(dom){
        if(timecode !== undefined){
            setByPath(dom, "__timecode__", timecode);
        }
        setByPath(dom, control.split(EXPOSE_DELIMITER)[1], value);
    }
}

module.exports = {
    update : update
};


/** to update angular *****

    let $body = angular.element(document.body);
    let $rootScope =  $body.injector().get('$rootScope');
    $rootScope.$appy();

 ************************/