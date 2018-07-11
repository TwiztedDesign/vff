import {vffData} from '../../../src/core/vffData.js';
const updateHandler  = require('../../../src/core/handlers/updateHandler.js');
const helpers = require('../../../src/utils/helpers.js');

/******************************* global spies ********************************/

const updateCB = jest.spyOn(vffData, 'updateCB');
const setByPath = jest.spyOn(helpers, 'setByPath');
const data = {prop : "value"};
let template;
const templateName = 'test';
/****************************************************************************/

describe('Update Handler', () => {
    beforeEach(() => {
        vffData.clear();
        template = vffData.registerTemplate(templateName, data);
    });

    xdescribe('Update', () => {
        it('Should update the data in a given template as passed in the data obj', () => {
            updateHandler.update({'test': {prop: 'some other value'}});
            expect(template.prop).toBe('some other value');
            updateHandler.update({'TeSt': {prop: 'some third value'}});
            expect(template.prop).toBe('some third value');

            expect(updateCB).toHaveBeenCalledTimes(2);
        });
        it('Should add the passed property with value to the DOM element object', () => {

        });
        it('should handle nested objects', () => {
            console.log('!!!!!!!!!!!!!!');
            updateHandler.update({'test' : {prop: { prop1 : 'some other value'}}});
            expect(template.prop.prop1).toBe('some other value');
        });
    });



    xdescribe('Update', () => {

        it('Should add the passed property with value to the DOM element object', () => {
            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'dom-test');
            headerElement.setAttribute("vff-name", 'vff-title');
            document.body.appendChild(headerElement);

            vffData.addTemplate('dom-test', {'vff-title': 'title'});
            let testElement = document.querySelector('[vff-template="dom-test" i] [vff-name="vff-title" i], [vff-template="dom-test" i][vff-name="vff-title" i]');
            updateHandler.update({'dom-test': {'vff-title title': 'test title'}});
            expect(setByPath).toHaveBeenCalledWith(testElement, 'title', 'test title');
            // console.log('text', testElement.innerText);
            // expect(testElement.innerHTML).toBe('test title');

            // let date = Date.now();
            // updateHandler.update({'dom-test': {'__timecode__': date}});
            // expect(setByPath).toHaveBeenCalledWith(testElement, '__timecode__', date);

        });

        // it('should add non existing controls to existing templates', () => {
        //     expect(vffData._main['test']['testControl']).toBe(undefined);
        //     updateHandler.update({'test': {testControl: "hi"}});
        //     expect(vffData._main['test']['testControl']).toBe('hi');
        // });
    });

    xdescribe('Update incorrect data', () => {
        it('Should not update a non-existing template data and/or add the incorrect data or template', () => {
            updateHandler.update({'some template': {"some prop": "some value"}});
            expect(vffData.getTemplate('some template')).toBeUndefined();
            expect(template['some prop']).toBeUndefined();
            expect(updateCB).not.toHaveBeenCalled();

        });
        it('Should not update an existing template data if the data passed is empty', () => {
            updateHandler.update({'test': {}});
            expect(template.prop).toBe('value');
            expect(updateCB).not.toHaveBeenCalled();
        });
    });

});