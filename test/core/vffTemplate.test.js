import {vffData} from '../../src/core/vffData.js';
import {USER_UPDATE, OUTGOING_EVENT} from "../../src/utils/events";
import {_init} from "../../src/core/initDOM";
const messenger = require('../../src/utils/messenger.js');
let send = jest.spyOn(messenger, 'send');
import {htmlToElement} from '../testHelpers';
import {update} from '../../src/core/handlers/updateHandler';


describe('VffTemplate', () => {

    beforeEach(() => {
        vffData.clear();
        document.body.innerHTML = '';
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
            template._update({newProp : 'some value'});
            expect(template.newProp).toBe('some value');
            expect(template.visibility).toBeTruthy();
        });
        it("shouldn't trigger user update", () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            template._update({prop : true});
            expect(send).not.toHaveBeenCalledWith(USER_UPDATE, expect.anything());
        });
        it('should handle nested objects', () => {
            let template = vffData.registerTemplate('test', {visibility : true});
            template._update({prop: { prop1 : 'some other value'}});
            template._update({prop: { prop2 : 'some second value'}});
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

    describe('Internal properties', () => {
        it("can't override internal properties", () => {
            let template = vffData.registerTemplate('test', {"some prop" : "some value"});
            function override(){
                template._update = 'some data';
            }
            expect(override).toThrowError(/Override Error/);
        });
    });

    describe('$element', () => {

        it('should return correct element',() => {
            let element = htmlToElement('<div vff-template="test-template"><h1 vff-name="title"></h1></div>');
            element.innerText = 'Title';
            element.style.color = 'red';
            document.body.appendChild(element);
            _init();

            let template = vffData.getTemplate('test-template');
            let el = template.$element('title');
            expect(el).toBeDefined();
            expect(el.getAttribute('vff-name')).toBe('title');
        });
        it('should return correct element',() => {
            let element = htmlToElement('<div vff-template="test-template" vff-name="title"></div>');
            element.innerText = 'Title';
            element.style.color = 'red';
            document.body.appendChild(element);
            _init();

            let template = vffData.getTemplate('test-template');
            let el = template.$element('title');
            expect(el).toBeDefined();
            expect(el.getAttribute('vff-name')).toBe('title');
        });

    });
    describe('$emit', () => {

        it('emit message to parent frame with given payload',() => {
            let tempalte = vffData.registerTemplate("test", {});
            let payload = {prop : 'test'};
            tempalte.$emit(payload);
            expect(send).toHaveBeenCalledWith(OUTGOING_EVENT, expect.objectContaining({channel: 'test', data: payload}));
        });

        it('emit message to parent frame with given payload and query params',() => {
            let query = {
                q1 : 'param1',
                q2 : 'param2'
            };
            vffData.addQueryParams(query);
            let tempalte = vffData.registerTemplate("test", {});
            let payload = {prop : 'test'};
            tempalte.$emit(payload);
            expect(send).toHaveBeenCalledWith(OUTGOING_EVENT, expect.objectContaining({channel: 'test', data: payload, query : query}));
        });

    });
    describe('$on', () => {
        it('should fire a callback on data change',(done) => {
            let template = vffData.registerTemplate("template1", {prop : 1});
            template.$on('prop', function(data){
                expect(data).toBe(2);
                done();
            });
            update({template1: {prop : 2}});
        });
        it("should not file when data didn't change",(done) => {
            let template = vffData.registerTemplate("template2", {prop : 1});
            template.$on('prop', function(data){
                expect(true).toBeFalsy();
            });
            update({template2: {prop : 1}});
            setTimeout(done, 500);
        });
        it('should fire a callback on data change',(done) => {
            let template = vffData.registerTemplate("template3", {prop : 1});
            template.$on(function(data){
                expect(data).toEqual({prop : 2});
                done();
            });
            update({template3: {prop : 2}});
        });
        it("should not fire when data didn't change",(done) => {
            let template = vffData.registerTemplate("template4", {prop : 1});
            template.$on(function(data){
                expect(true).toBeFalsy();
            });
            update({template4: {prop : 1}});
            setTimeout(done, 500);
        });
        it("should throw error if called without arguments",() => {
            let template = vffData.registerTemplate("template5", {prop : 1});
            expect(() => {
                template.$on();
            }).toThrowError();
        });
        it('should fire a callback on same data with changeOnly:false',(done) => {
            let template = vffData.registerTemplate("template6", {prop : 1});
            template.$on(function(data){
                expect(data).toEqual({prop : 1});
                done();
            },{changeOnly : false});
            update({template6: {prop : 1}});
        });
        it('should fire only once when throttling',(done) => {
            let template = vffData.registerTemplate("template7", {prop : 1});

            let mock = jest.fn();
            template.$on(function(data){
                mock(data);
                expect(data).toEqual({prop : 5});
                done();
            },{throttle:true});

            update({template7: {prop : 1}});
            update({template7: {prop : 2}});
            update({template7: {prop : 3}});
            update({template7: {prop : 4}});
            update({template7: {prop : 5}});
        });
    });


});
