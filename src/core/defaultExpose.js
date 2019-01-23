HTMLHeadingElement.prototype.expose = function(){
    return {text : 'innerText', color : {path : 'style.color'}};
};
HTMLSpanElement.prototype.expose = function(){
    return {text : 'innerText'};
};
HTMLParagraphElement.prototype.expose = function(){
    return {text : 'innerText'};
};
HTMLImageElement.prototype.expose = function(){
    return {src : {path : 'src', attribute : true}};
};
