import {_init} from'../../src/core/initDOM';
import {vffData} from '../../src/core/vffData';


function htmlToElement(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

describe('Init DOM', () => {

    beforeAll(() => {
        vffData.clear();

        let element = htmlToElement('<h1 vff-template="test-template" vff-name="test-control"></h1>');

        element.innerText = 'Title';
        element.style.color = 'red';
        document.body.appendChild(element);

        _init();
    });

    it('span should expose inner text', () => {
        console.log(vffData.getTemplate('test-template'));
        expect(vffData.getTemplate('test-template')).toBeDefined();
        expect(vffData.getTemplate('test-template')['test-control text']).toBe('Title');
        expect(vffData.getTemplate('test-template')['test-control color']).toBe('red');
    });

});