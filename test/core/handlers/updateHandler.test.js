import {vffData} from '../../../src/core/vffdata.js';
const updateHandler  = require('../../../src/core/handlers/updateHandler.js');
const helpers = require('../../../src/utils/helpers.js');

/******************************* global spies ********************************/

const updateCB = jest.spyOn(vffData, 'updateCB');
const setByPath = jest.spyOn(helpers, 'setByPath');


/****************************************************************************/

describe('Update Handler', () => {
    beforeEach(() => {
        vffData.clear();
        vffData.addTemplate('test', {visibility: true});
    });

    describe('Update incorrect data', () => {
        it('Should not update a non-existing template data and/or add the incorrect data or template', () => {
            let initialData = JSON.parse(JSON.stringify(vffData._main));

            updateHandler.update({'test33': {count: 2}});
            expect(vffData._main['test33']).toBe(undefined);
            expect(vffData._main['test']['count']).toBe(undefined);

            expect(vffData._main).toEqual(initialData);


            expect(updateCB).not.toHaveBeenCalled();


        });

        it('Should not update an existing template data if the data passed is empty', () => {
            let initialData = JSON.parse(JSON.stringify(vffData._main));
            updateHandler.update({'test': {}});
            expect(vffData._main).toEqual(initialData);

            expect(updateCB).not.toHaveBeenCalled();
        });
    });

    describe('Update', () => {
        it('Should update the data in a given template as passed in the data obj', () => {
            expect(vffData._main['test']['visibility']).toBe(true);
            updateHandler.update({'test': {visibility: false}});
            expect(vffData._main['test']['visibility']).toBe(false);
            expect(updateCB).toHaveBeenCalledTimes(1);

            // updating an existing template with incorrect template name, case insensitive
            updateHandler.update({'TesT': {visibility: true}});
            expect(vffData._main['test']['visibility']).toBe(true);
        });

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

});