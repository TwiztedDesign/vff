import {_init, init} from'../../src/core/initDOM';
import {vffData} from '../../src/core/vffData';
import '../../src/core/defaultExpose';
import {htmlToElement} from '../testHelpers';

describe('Init DOM', () => {

    beforeEach(() => {
        document.body.innerHTML = '';
        vffData.clear();
    });

    it('should create a template when vff-template and vff-name are on the same element', () => {

        let element = htmlToElement('<h1 vff-template="test-template" vff-name="test-control"></h1>');
        element.innerText = 'Title';
        element.style.color = 'red';
        document.body.appendChild(element);
        _init();
        expect(vffData.getTemplate('test-template')).toBeDefined();
        expect(vffData.getTemplate('test-template')['test-control text']).toBe('Title');
        expect(vffData.getTemplate('test-template')['test-control color']).toBe('red');
    });

    it('when vff-name is not defined, create one with space as name', () => {

        let element = htmlToElement('<h1 vff-template="test-template"></h1>');
        element.innerText = 'Title';
        element.style.color = 'red';
        document.body.appendChild(element);
        _init();
        expect(vffData.getTemplate('test-template')).toBeDefined();
        expect(vffData.getTemplate('test-template')[' text']).toBe('Title');
        expect(vffData.getTemplate('test-template')[' color']).toBe('red');
    });

    it('the vff-name is defined but vff-template is not, declare one with Untitled Template {number} as a name', () => {

        let element1 = htmlToElement('<h1 vff-name="test-control"></h1>');
        let element2 = htmlToElement('<h1 vff-name="test-control"></h1>');

        document.body.appendChild(element1);
        document.body.appendChild(element2);
        _init();
        expect(vffData.getTemplate('Untitled Template 1')).toBeDefined();
        expect(vffData.getTemplate('Untitled Template 2')).toBeDefined();
    });

    it('should create a template when vff-template and vff-name are on the same element', () => {

        let element = htmlToElement('<div vff-template="test-template"><h1 vff-name="title">Title</h1><h2 vff-name="subtitle">Subtitle</h2></div>');
        document.body.appendChild(element);
        _init();

        let template = vffData.getTemplate('test-template');

        expect(template).toBeDefined();

        // expect(template['title text']).toBe('Title'); //innerText is not supported by jsdom
        // expect(template['subtitle text']).toBe('Subtitle'); //innerText is not supported by jsdom

    });

    it('should proxy exposed properties', () => {
        let element = htmlToElement('<h1 vff-template="test-template" vff-name="test-control"></h1>');
        document.body.appendChild(element);
        _init();
        element.text = 'title';
        expect(element.text).toBe(element.innerText);
        expect(element.innerText).toBe('title');
    });

    it('should trigger init on window load event', (done) => {
        let element = htmlToElement('<h1 vff-template="test-template" vff-name="test-control"></h1>');
        document.body.appendChild(element);
        window.addEventListener('load', () => {
            setTimeout(function(){
                expect(vffData.getTemplate('test-template')).toBeDefined();
                done();
            },1);
        });
        init();
        window.dispatchEvent(new Event('load'));
    });

});