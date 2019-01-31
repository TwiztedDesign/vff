const pagesHandler = require('../../../src/core/handlers/pagesHandler');
import {vffData} from '../../../src/core/vffData.js';

describe('Pages Handler', () => {

    describe('Add pages', () => {
        it('Should Add the data to the pages', () => {
            //Arrange
            const addPagesSpy = jest.spyOn(vffData, 'addPages');
            let mockData = {};

            //Act
            pagesHandler.pages(mockData);

            //Assert
            expect(addPagesSpy).toHaveBeenCalledWith(mockData);
            expect(addPagesSpy).toHaveBeenCalledTimes(1);
        });
    });
});