import {vffData} from '../../src/core/vffData.js';
import {USER_UPDATE} from "../../src/utils/events";
const messenger = require('../../src/utils/messenger.js');
let send = jest.spyOn(messenger, 'send');


describe('VffTemplate', () => {

    beforeEach(() => {
        vffData.clear();
    });

    describe('properties', () => {
        let template = vffData.registerTemplate('test', {visibility : true});
        describe('getter', () => {
            it('it should access proxy', () => {
                expect(template.visibility).toBe(true);
            });
        });
        describe('setter', () => {
            it('should trigger user update', () => {
               template.visibility = false;
                expect(send).toHaveBeenCalledWith(USER_UPDATE, expect.anything());
            });
        });
    });

    describe('addData', () => {
        it('should add data to the template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            expect(template.newProp).toBeUndefined();
            expect(template.visibility).toBeTruthy();
            template.update({newProp : 'some value'});
            expect(template.newProp).toBe('some value');
            expect(template.visibility).toBeTruthy();
        });
        it("shouldn't trigger user update", () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            template.update({prop : true});
            expect(send).not.toHaveBeenCalledWith(USER_UPDATE, expect.anything());
        });
        it('should handle nested objects', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            template.update({prop: { prop1 : 'some other value'}});
            template.update({prop: { prop2 : 'some second value'}});
            expect(template.prop.prop1).toBe('some other value');
            expect(template.prop.prop2).toBe('some second value');

        });
    });
    describe('show', () => {
        it('Should set the visibility property value to TRUE in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : false});
            expect(template.visibility).toBeFalsy();
            template.show();
            expect(template.visibility).toBeTruthy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            template.show();
            expect(template.visibility).toBeUndefined();
        });
    });
    describe('hide', () => {
        it('Should set the visibility property value to FALSE in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            expect(template.visibility).toBeTruthy();
            template.hide();
            expect(template.visibility).toBeFalsy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            template.hide();
            expect(template.visibility).toBeUndefined();
        });
    });
    describe('toggle', () => {
        it('Should toggle the visibility property value in the given template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            template.toggle();
            expect(template.visibility).toBeFalsy();
            template.toggle();
            expect(template.visibility).toBeTruthy();

        });
        it('Should NOT affect the visibility property value in the given template if visibility does not exists' , () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            expect(template.visibility).toBeUndefined();
            template.toggle();
            expect(template.visibility).toBeUndefined();
        });
    });

});
