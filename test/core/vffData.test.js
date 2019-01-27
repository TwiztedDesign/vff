import {vffData} from '../../src/core/vffData.js';
const messenger = require('../../src/utils/messenger.js');
import {ADD} from "../../src/utils/events";
import {docRef} from "../../src/utils/helpers";
import {REGISTER_TEMPLATE} from "../../src/utils/docRefs";

let controlName = 'testControl', controlValue = 'hello';
let send = jest.spyOn(messenger, 'send');

describe('vff Data', () => {
    beforeEach(() => {
        vffData.clear();
    });

    describe('clear', () => {
        it('Should clear all the data', () => {
            vffData.registerControl(controlName, controlValue);
            expect(vffData._controls.length).toBe(1);
            vffData.clear();
            expect(vffData._controls.length).toBe(0);
        });
    });

    describe('registerControl', () => {
        it('Should return a control object', () => {
            let control = vffData.registerControl(controlName, controlValue);
            expect(control).toBeDefined();
        });
        it('Should add a control', () => {
            expect(vffData._controls().length).toBe(0);
            vffData.registerControl('test', data);
            expect(vffData._controls().length).toBe(1)
        });
        it('Should update the value of an existing control', () => {
            let control = vffData.registerControl(controlName, controlValue);
            let newValue = 'new value';
            expect(control.getValue()).toBe(controlValue);
            vffData.registerControl(controlName, newValue);
            expect(control.getValue()).toBe(newValue);
            expect(vffData._controls.length).toBe(1);
        });
        xit('Should emit an event', () => {
            vffData.registerControl(controlName, controlValue);
            expect(send).toHaveBeenCalledTimes(1);
            expect(send).toHaveBeenCalledWith(ADD, {
                channel : 'test',
                options : expect.anything(),
                data    : data
            });
        });

    });

    describe('getTemplates', () => {
        it('should return all templates', () => {
            let template1 = vffData.registerTemplate('test1', data);
            let template2 = vffData.registerTemplate('test2', data);
            let templates = vffData.getTemplates();
            expect(templates).toEqual(expect.arrayContaining([template1, template2]));
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
    describe('onUpdate', () => {
        it('Should set the CB function', () => {
            let updateFunc = () => {};
            vffData.onUpdate(updateFunc);
            expect(vffData._updateCB).toEqual(updateFunc);
        });
    });
    describe('onPages', () => {
        it('Should replace the passed pages in vff _pages', (done) => {
            let spy = jest.spyOn(vffData, 'updateCB');
            let pages = [{name: 'page1'}, {name: 'page2'}];
            vffData.addPages(pages);
            vffData.onPages((p) => {
                    expect(p).toEqual(pages);
                    done();
            });
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
    describe('getPages', () => {
        it('Should return the vff _pages', (done) => {
            let pages = [{name: 'page1'}, {name: 'page2'}];
            vffData.addPages(pages);
            vffData.getPages().then((p) => {
                expect(pages).toEqual(p);
                done();
            });
        });
    });
    describe('getQueryParams', () => {
        it('Should return the vff _queryParams', () => {
            let params = [{name: 'param1', value:'val1'}, {name: 'param2', value:'val2'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
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

});
