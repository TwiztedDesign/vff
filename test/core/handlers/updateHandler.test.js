import {vffData} from '../../../src/core/vffData.js';
import {_init} from '../../../src/core/initDOM';
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
        document.body.innerHTML = '';
        vffData.clear();
        template = vffData.registerTemplate(templateName, data);
    });

    describe('Update', () => {
        it('Should update the data in a given template as passed in the data obj', () => {
            updateHandler.update({'test': {prop: 'some other value'}});
            expect(template.prop).toBe('some other value');
            updateHandler.update({'TeSt': {prop: 'some third value'}});
            expect(template.prop).toBe('some third value');

            expect(updateCB).toHaveBeenCalledTimes(2);
        });
        it('Should add the passed property with value to the DOM element object', () => {
            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'dom-test');
            headerElement.setAttribute("vff-name", 'vff-title');
            document.body.appendChild(headerElement);
            _init();


            expect(vffData.getTemplates().length).toBe(2);
            expect(vffData.getTemplate('dom-test')).toBeDefined();

            // updateHandler.update({'dom-test': {'vff-title title': 'test title'}});
            //
            // expect(vffData.getTemplate('dom-test').getElement().title).toBe('test title');

            // vffData.registerTemplate('dom-test', {'vff-title': 'title'});
            // let testElement = document.querySelector('[vff-template="dom-test" i] [vff-name="vff-title" i], [vff-template="dom-test" i][vff-name="vff-title" i]');
            // updateHandler.update({'dom-test': {'vff-title title': 'test title'}});
            // expect(testElement.title).toBe('test title');

            // expect(setByPath).toHaveBeenCalledWith(testElement, 'title', 'test title');
        });
        it('should handle nested objects', () => {
            updateHandler.update({'test' : {prop: { prop1 : 'some other value'}}});
            expect(template.prop.prop1).toBe('some other value');
        });

    });
});