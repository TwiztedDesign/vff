import {vffData} from "../../../src/core/vffData";
const vfDataHandler  = require('../../../src/core/handlers/vfDataHandler');
const { JSDOM } = require('jsdom');
const defaultMode = '123';

describe('Vf Data Handler', () => {

    beforeEach(() => {
        global.window = JSDOM.window;
        global.window.vff= {
            mode:defaultMode
        };
    });

    describe('Handle VF Data', () => {
        it('Should not change the vff mode', () => {
            //Arrange
            const onReadySpy = jest.spyOn(vffData, 'onReady');
            let mockedData = {};

            //Act
            vfDataHandler.handleVFData(mockedData);

            //Assert
            expect(onReadySpy).toHaveBeenCalledTimes(1);
            expect(global.window.vff.mode).toBeDefined();
            expect(global.window.vff.mode).toBe(defaultMode);
        });

        it('Should override vff mode', () => {
            //Arrange
            const onReadySpy = jest.spyOn(vffData, 'onReady');
            let newMode = '456';
            let mockedData = {
                mode:newMode
            };

            //Act
            vfDataHandler.handleVFData(mockedData);

            //Assert
            expect(onReadySpy).toHaveBeenCalledTimes(1);
            expect(global.window.vff.mode).toBeDefined();
            expect(global.window.vff.mode).toBe(newMode);
        });
    });
});