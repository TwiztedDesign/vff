import {vffData} from "../../../src/core/vffData";
const queryParamsHandler  = require('../../../src/core/handlers/queryParamsHandler.js');
describe('Query Params Handler', () => {

    describe('Query params', () => {
        it('Should Add the passed query params object to vff data', () => {
            //Arrange
            const addQueryParamsSpy = jest.spyOn(vffData, 'addQueryParams');
            let queryParamsMock = {};

            //Act
            queryParamsHandler.queryParams(queryParamsMock);

            //Assert
            expect(addQueryParamsSpy).toHaveBeenCalledWith(queryParamsMock);
            expect(addQueryParamsSpy).toHaveBeenCalledTimes(1);
        });
    });
});