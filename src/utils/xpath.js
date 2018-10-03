module.exports = {

    createXPathFromElement : (elm) => {
        let allNodes = document.getElementsByTagName('*');
        let segs, sib, i;
        for (segs = []; elm && elm.nodeType == 1; elm = elm.parentNode){
            if (elm.hasAttribute('id')) {
                let uniqueIdCount = 0;
                for (let n=0;n < allNodes.length;n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                }
                if ( uniqueIdCount == 1) {
                    segs.unshift('id("' + elm.getAttribute('id') + '")');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else if (elm.hasAttribute('class')) {
                segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
            } else {
                for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName == elm.localName)  i++;
                }
                segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
            }
        }
        return segs.length ? '/' + segs.join('/') : null;
    },

    lookupElementByXPath : (path) => {
        path = path.replace(/\/svg\[(\d+)\]/g, "/*[name() = 'svg'][$1]");
        path = path.replace(/\/g\[(\d+)\]/g, "/*[name() = 'g'][$1]");
        path = path.replace(/\/circle\[(\d+)\]/g, "/*[name() = 'circle'][$1]");
        path = path.replace(/\/rect\[(\d+)\]/g, "/*[name() = 'rect'][$1]");
        path = path.replace(/\/path\[(\d+)\]/g, "/*[name() = 'path'][$1]");

        let evaluator = new XPathEvaluator();
        let result = evaluator.evaluate(path, document.documentElement, null,XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return  result.singleNodeValue;
    },
    getElementByXpath : (path) => {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

};