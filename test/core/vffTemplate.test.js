import {vffData} from '../../src/core/vffData.js';


describe('VffTemplate', () => {

    beforeEach(() => {
        vffData.clear();
    });

    describe('addData', () => {
        it('should add data to the template', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            expect(template.newProp).toBeUndefined();
            expect(template.visibility).toBeTruthy();
            template.addData({newProp : 'some value'});
            expect(template.newProp).toBe('some value');
            expect(template.visibility).toBeTruthy();
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