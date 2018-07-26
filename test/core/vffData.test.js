import {vffData} from '../../src/core/vffData.js';
const messenger = require('../../src/utils/messenger.js');
import {ADD} from "../../src/utils/events";
// import  from '../../src/utils/messenger.js';

let data = {visibility: false};
let send = jest.spyOn(messenger, 'send');

describe('vff Data', () => {
    beforeEach(() => {
        vffData.clear();
    });

    describe('clear', () => {
        it('Should clear all the data', () => {
            vffData.registerTemplate('test', data);
            expect(vffData.getTemplate('test')).toBeDefined();
            expect(vffData.getTemplates().length).toBe(1);
            vffData.clear();
            expect(vffData.getTemplate('test')).toBeUndefined();
            expect(vffData.getTemplates().length).toBe(0);
        });
    });

    describe('registerTemplate', () => {
        it('Should return a template object', () => {
            var template = vffData.registerTemplate('test', data);
            expect(template).toBeDefined();
        });
        it('Should add a template', () => {
            expect(vffData.getTemplates().length).toBe(0);
            vffData.registerTemplate('test', data);
            expect(vffData.getTemplates().length).toBe(1)
        });
        it('Should update or add the data to an already existing template', () => {
            let template = vffData.registerTemplate('test', data);
            expect(template.newProp).toBeUndefined();
            vffData.registerTemplate('test', {newProp : 'some value'});
            expect(template.newProp).toBeDefined();
            expect(vffData.getTemplates().length).toBe(1);

        });
        it('Should not affect or add to the data of an already existing template when passed empty data', () => {
            let template = vffData.registerTemplate('test', data);
            expect(template.visibility).toBe(false);
            vffData.registerTemplate('test', {});
            expect(template.visibility).toBe(false);
            expect(vffData.getTemplates().length).toBe(1);
        });
        it('Should emit an event', () => {
            vffData.registerTemplate('test', data);
            expect(send).toHaveBeenCalledTimes(1);
            expect(send).toHaveBeenCalledWith(ADD, {
                channel : 'test',
                data    : data
            });
        });
    });

    describe('getTemplates', () => {
        it('should return all templates', () => {
            let template1 = vffData.registerTemplate('test1', data);
            let template2 = vffData.registerTemplate('test2', data);
            expect(vffData.getTemplates()).toEqual(expect.arrayContaining([template1, template2]));
            expect(vffData.getTemplates().length).toBe(2);
        })
    });

    describe('getTemplate', () => {
        it('should return a template by name', () => {
            let template = vffData.registerTemplate('test', data);
            expect(vffData.getTemplate('test')).toEqual(template);
        });
    });

    describe('show', () => {
        it('Should set the visibility property value to TRUE in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : false});
            expect(template.visibility).toBeFalsy();
            vffData.show('test');
            expect(template.visibility).toBeTruthy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            vffData.show('test');
            expect(template.visibility).toBeUndefined();
        });
    });
    describe('hide', () => {
        it('Should set the visibility property value to FALSE in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            expect(template.visibility).toBeTruthy();
            vffData.hide('test');
            expect(template.visibility).toBeFalsy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            vffData.hide('test');
            expect(template.visibility).toBeUndefined();
        });
    });
    describe('toggle', () => {
        it('Should toggle the visibility property value in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            vffData.toggle('test');
            expect(template.visibility).toBeFalsy();
            vffData.toggle('test');
            expect(template.visibility).toBeTruthy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            vffData.toggle('test');
            expect(template.visibility).toBeUndefined();
        });
    });
    describe('addPages', () => {
        it('Should replace the passed pages in vff _pages', () => {
            let spy = jest.spyOn(vffData, 'updateCB');
            let pages = [{name: 'page1'}, {name: 'page2'}];
            expect(vffData.getPages()).toHaveLength(0);
            vffData.addPages(pages);
            expect(vffData.getPages()).toEqual(pages);
            pages = [{name: 'page3'}, {name: 'page4'}];
            vffData.addPages(pages);
            expect(vffData.getPages()).toEqual(pages);
            expect(spy).toHaveBeenCalledTimes(2);
        });
    });
    describe('getPages', () => {
        it('Should return the vff _pages', () => {
            let pages = [{name: 'page1'}, {name: 'page2'}];
            vffData.addPages(pages);
            expect(vffData.getPages()).toEqual(pages);
        });
    });
    describe('addQueryParams', () => {
        it('Should replace the passed params in vff _queryParams', () => {
            let spy = jest.spyOn(vffData, 'updateCB');
            let params = [{name: 'param1', value:'val1'}, {name: 'param2', value:'val2'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
            params = [{name: 'param3', value:'val3'}, {name: 'param4', value:'val4'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
            expect(spy).toHaveBeenCalledTimes(2);
        });
    });
    describe('getQueryParams', () => {
        it('Should return the vff _queryParams', () => {
            // expect(vffData.getQueryParams()).toBeUndefined();
            let params = [{name: 'param1', value:'val1'}, {name: 'param2', value:'val2'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
        });
    });
});