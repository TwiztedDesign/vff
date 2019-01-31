const reloadHandler  = require('../../../src/core/handlers/reloadHandler');
const { JSDOM } = require('jsdom');

describe('Reload Handler', () => {

    describe('Reload', () => {
        it('Should call global window reload method', () => {
            //Arrange
            global.window = JSDOM.window;
            const reloadspy = jest.spyOn(global.window.location, 'reload');

            //Act
            reloadHandler.reload();

            //Assert
            expect(reloadspy).toHaveBeenCalledTimes(1);
        });
    });
});