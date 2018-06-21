import {vffData} from '../../src/core/vffdata.js';
const messenger = require('../../src/utils/messenger.js');
// import  from '../../src/utils/messenger.js';

let data = {visibility: false};
let send = jest.spyOn(messenger, 'send');

describe('vff Data', () => {
    beforeEach(() => {
        vffData.clear();
    });

    describe('Clear', () => {
        it('Should clear all the data', () => {
            vffData.addTemplate('test', data);
            expect(vffData._main).toHaveProperty('test');
            expect(vffData._proxy).toHaveProperty('test');
            vffData.clear();
            expect(vffData._main).toEqual({});
            expect(vffData._proxy).toEqual({});
        });
    });


    describe('Add template', () => {
        it('Should add a template to a page', () => {
            vffData.addTemplate('test', data);
            expect(vffData._main).toHaveProperty('test');
            expect(vffData._proxy).toHaveProperty('test');
            expect(vffData._main['test']).toEqual(data);
            expect(vffData._proxy['test']).toEqual(data);

            expect(send).toHaveBeenCalledTimes(1);


        });

        it('Should update or add the data to an already existing template', () => {
            vffData.addTemplate('test', data);
            expect(vffData._main).toHaveProperty('test');
            expect(vffData._proxy).toHaveProperty('test');

            // add to existing template with existing data
            expect(vffData._main['test']['visibility']).toBe(false);
            expect(vffData._proxy['test']['visibility']).toBe(false);
            vffData.addTemplate('test', {visibility: true});
            expect(vffData._main['test']['visibility']).toBe(true);
            expect(vffData._proxy['test']['visibility']).toBe(true);

            // add to existing template with new data
            expect(vffData._main['test']['count']).toBe(undefined);
            expect(vffData._proxy['test']['count']).toBe(undefined);
            vffData.addTemplate('test', {count: 2});
            expect(vffData._main['test']['visibility']).toBe(true);
            expect(vffData._proxy['test']['visibility']).toBe(true);
            expect(vffData._main['test']['count']).toBe(2);
            expect(vffData._proxy['test']['count']).toBe(2);

            expect(send).toHaveBeenCalledTimes(3);
        });

        it('Should add and update data in an existing template', () => {
            vffData.addTemplate('myTest', {count: 2, visibility: true});

            expect(vffData._main['myTest']).toHaveProperty('count');
            expect(vffData._proxy['myTest']).toHaveProperty('visibility');
            expect(vffData._proxy['myTest']).not.toHaveProperty('title');
            vffData.addTemplate('myTest', {count: 3, visibility: false, title: 'new title'});
            expect(vffData._main['myTest']['visibility']).toBe(false);
            expect(vffData._proxy['myTest']['visibility']).toBe(false);
            expect(vffData._main['myTest']['count']).toBe(3);
            expect(vffData._proxy['myTest']['count']).toBe(3);
            expect(vffData._proxy['myTest']).toHaveProperty('title');
            expect(vffData._main['myTest']['title']).toBe('new title');
            expect(vffData._proxy['myTest']['title']).toBe('new title');

            expect(send).toHaveBeenCalledTimes(2);

        });

        it('Should not affect or add to the data of an already existing template when passed empty data', () => {
            vffData.addTemplate('test', data);
            let initialData = vffData._main['test'];
            expect(vffData._main).toHaveProperty('test');
            expect(vffData._proxy).toHaveProperty('test');
            vffData.addTemplate('test', {});
            expect(vffData._main['test']).toEqual(initialData);
            expect(vffData._proxy['test']).toEqual(initialData);
        });

        it('Should add template with empty data when passed empty data', () => {
            expect(vffData._main).not.toHaveProperty('myTemplate');
            expect(vffData._proxy).not.toHaveProperty('myTemplate');
            vffData.addTemplate('myTemplate', {});
            expect(vffData._main).toHaveProperty('myTemplate');
            expect(vffData._proxy).toHaveProperty('myTemplate');
            expect(vffData._main['myTemplate']).toEqual({});
            expect(vffData._proxy['myTemplate']).toEqual({});

            expect(send).toHaveBeenCalled();
        });
    });

    describe('Show', () => {
        it('Should set the visibility property value to true in the given template', () => {
            vffData.addTemplate('test', data);
            vffData._main['test']['visibility'] = false;
            vffData._proxy['test']['visibility'] = false;
            vffData.show('test');
            expect(vffData._main['test']['visibility']).toBe(true);
            expect(vffData._proxy['test']['visibility']).toBe(true);
        });

        it('Should affect the visibility property value in the given template if visibility does not exists' , () => {
            vffData.addTemplate('myTemplate', {});
            expect(vffData._main).toHaveProperty('myTemplate');
            expect(vffData._proxy).toHaveProperty('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
            vffData.show('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
        });
    });

    describe('Hide', () => {
        it('Should set the visibility property value to false in the given template', () => {
            vffData.addTemplate('test', data);
            vffData._main['test']['visibility'] = true;
            vffData._proxy['test']['visibility'] = true;
            vffData.hide('test');
            expect(vffData._main['test']['visibility']).toBe(false);
            expect(vffData._proxy['test']['visibility']).toBe(false);
        });

        it('Should affect the visibility property value in the given template if visibility doesn\'t exists' , () => {
            vffData.addTemplate('myTemplate', {});
            expect(vffData._main).toHaveProperty('myTemplate');
            expect(vffData._proxy).toHaveProperty('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
            vffData.hide('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
        });
    });

    describe('Toggle', () => {
        it('Should set the visibility property to the opposite of the current value in the given template', () => {
            vffData.addTemplate('test', data);
            let currentVisibility = vffData._main['test']['visibility'];
            vffData.toggle('test');
            expect(vffData._main['test']['visibility']).toBe(!currentVisibility);
            expect(vffData._proxy['test']['visibility']).toBe(!currentVisibility);
        });

        it('Should affect the visibility property value in the given template if visibility doesn\'t exists' , () => {
            vffData.addTemplate('myTemplate', {});
            expect(vffData._main).toHaveProperty('myTemplate');
            expect(vffData._proxy).toHaveProperty('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
            vffData.toggle('myTemplate');
            expect(vffData._main['myTemplate']).not.toHaveProperty('visibility');
            expect(vffData._proxy['myTemplate']).not.toHaveProperty('visibility');
        });
    });

});