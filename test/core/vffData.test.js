import {vffData} from '../../src/core/vffData.js';
const messenger = require('../../src/utils/messenger.js');
const updateHandler  = require('../../src/core/handlers/updateHandler');
import {ADD} from "../../src/utils/events";

let controlName = 'testControl', controlValue = 'hello';

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
        it('Should emit an event with the control options', (done) => {
            //Arrange
            let sendSpy = jest.spyOn(messenger, 'send');

            //Act
            let control = vffData.registerControl(controlName, controlValue);

            //Assert
            setTimeout(()=>{
                expect(sendSpy).toHaveBeenCalledWith(ADD, {
                    channel : control.getGroup(),
                    options : control.getOptions(),
                    data    : {[controlName] : controlValue}
                });
                done();
            },3500);
        });
        it('Should return a control object', () => {
            let control = vffData.registerControl(controlName, controlValue);
            expect(control).toBeDefined();
        });
        it('Should add a control', () => {
            expect(vffData._controls.length).toBe(0);
            vffData.registerControl(controlName, controlValue);
            expect(vffData._controls.length).toBe(1)
        });
        it('Should update the value of an existing control', () => {
            let control = vffData.registerControl(controlName, controlValue);
            let newValue = 'new value';
            expect(control.getValue()).toBe(controlValue);
            vffData.registerControl(controlName, newValue);
            expect(control.getValue()).toBe(newValue);
            expect(vffData._controls.length).toBe(1);

        });
        it('Should throw an exception of missing arguments', () =>{
            expect(()=>{
                vffData.registerControl(controlName);
            }).toThrowError();
        });

    });

    describe('updateControl', () => {
        it('should return control with updated value', () => {
            //Arrange
            let control = vffData.registerControl(controlName, controlValue);
            let newValue = 'test123';

            //Act
            let updated = vffData.updateControl(control.getName(), newValue);

            //Assert
            expect(updated).toBeTruthy();
            expect(control.getValue()).toEqual(newValue);
        });
    });

    describe('registerControls', () => {
        it('should create controls from object', () => {
            vffData.registerControls({

                title : 'hello',
                subtitle : 'goodbye'
            });
            expect(vffData.getControls().length).toBe(2);
        });
        it('should create controls with the correct ui', () => {
            let value = "option 1";
            let ui = {
                type : 'dropdown',
                options : ['option 1', 'option 2', 'option 3']
            };

            vffData.registerControls({
                dropdown : {value, ui},
                subtitle : 'goodbye'
            });
            expect(vffData.getControls().length).toBe(2);
            expect(vffData.getControl('subtitle').getValue()).toBe('goodbye');

            let control = vffData.getControl('dropdown');
            expect(control.getValue()).toBe(value);
            expect(control.getOptions().ui).toBe(ui);


        });
    });

    describe('getControls', () => {

       it('should return all controls when called without arguments', ()=> {
           vffData.registerControl('control 1', controlValue);
           vffData.registerControl('control 2', controlValue);
           vffData.registerControl('control 3', controlValue);
           expect(vffData.getControls().length).toBe(3);
       });
       it('should return all controls when called with empty string', ()=> {
           vffData.registerControl('control 1', controlValue);
           vffData.registerControl('control 2', controlValue);
           vffData.registerControl('control 3', controlValue);
           expect(vffData.getControls('').length).toBe(3);
       });
       it('should return all namespace controls', ()=> {
           vffData.registerControl('group1.control 1', controlValue);
           vffData.registerControl('group1.control 2', controlValue);
           vffData.registerControl('group2.control 3', controlValue);
           expect(vffData.getControls('group1').length).toBe(2);
           expect(vffData.getControls('group2').length).toBe(1);
       });
        it('should return all control by name when no namespace found', ()=> {
            vffData.registerControl('group1.control 1', controlValue);
            vffData.registerControl('group1.control 2', controlValue);
            vffData.registerControl('group2.control 1', controlValue);
            expect(vffData.getControls('control 1').length).toBe(2);

        });
       it('should return list with one control when called with specific control name', ()=> {
           vffData.registerControl('group1.control 1', controlValue);
           vffData.registerControl('group1.control 2', controlValue);
           vffData.registerControl('group2.control 3', controlValue);
           expect(vffData.getControls('group1.control 1').length).toBe(1);
       });
    });

    describe('getControl', () => {
        it('should throw an error when called without arguments', ()=> {
            vffData.registerControl('control 1', controlValue);
            vffData.registerControl('control 2', controlValue);
            vffData.registerControl('control 3', controlValue);

            expect(vffData.getControl).toThrowError(/Missing Arguments/);
        });
        it('should return undefined when called with group name only', ()=> {
            vffData.registerControl('group1.control 1', controlValue);
            vffData.registerControl('group1.control 2', controlValue);
            vffData.registerControl('group2.control 3', controlValue);

            expect(vffData.getControl('group1')).toBeUndefined();
        });
        it('should return control when called with specific control name', ()=> {
            let c = vffData.registerControl('group1.control 1', controlValue);
            vffData.registerControl('group1.control 2', controlValue);
            vffData.registerControl('group2.control 3', controlValue);

            expect(vffData.getControl('group1.control 1')).toBe(c);
        });
        it('should return first control found when search by name without group', ()=> {
            let c1 = vffData.registerControl('group1.control 1', controlValue);
            let c2 = vffData.registerControl('group1.control 2', controlValue);
            let c3 = vffData.registerControl('group2.control 1', controlValue);

            expect(vffData.getControl('control 1')).toBe(c1);
        });
        it('should ignore case', () => {
            let c = vffData.registerControl('Group.Control', controlValue);
            expect(vffData.getControl('control')).toBe(c);
            expect(vffData.getControl('Control')).toBe(c);
            expect(vffData.getControl('Group.control')).toBe(c);
            expect(vffData.getControl('Group.Control')).toBe(c);
            expect(vffData.getControl('group.control')).toBe(c);
            expect(vffData.getControl('group.Control')).toBe(c);
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
            let params = [{name: 'param1', value:'val1'}, {name: 'param2', value:'val2'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
            params = [{name: 'param3', value:'val3'}, {name: 'param4', value:'val4'}];
            vffData.addQueryParams(params);
            expect(vffData.getQueryParams()).toEqual(params);
        });
    });
    describe('on', () => {
        it('should fire with the control value', async (done) => {
           vffData.registerControl("test." + controlName, controlValue).on(event => {
               expect(event.data).toBe('new value');
               done();
           });
           updateHandler.update({test : {[controlName.toLowerCase()] : 'new value', control2 : 'another value'}});
        });
        it('should fire with with data not registered in the controls', (done) => {
            vffData.registerControls('test', {control1 : 'val1'}).on(event =>{
                expect(event.data).toEqual({control1 : 'new value', control2 : 'another value'});
                done();

            });

            updateHandler.update({test : {control1 : 'new value', control2 : 'another value'}});
        });

        it('should handle ui', (done) => {
            vffData.registerControl('control1', 'option1', {group : 'test1', ui: {type: 'dropdown', options: ['option1','option2']}});
            vffData.on('test1', event => {
                expect(event.data).toEqual({control1 : 'option2', control2 : 'another value'});
                done();
            });
            updateHandler.update({test1 : {control1 : {value : 'option2'}, control2 : 'another value'}});
        });
    });

});
