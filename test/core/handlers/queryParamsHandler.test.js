const queryParamsHandler = require('../../../src/core/handlers/queryParamsHandler.js');

describe('Query Params Handler', () => {

    describe('Query params', () => {
        it('Should Add the passed query params object to vff data', () => {
            let pages = jest.spyOn(queryParamsHandler, 'queryParams');
            queryParamsHandler.queryParams({inspect: '1'});
            expect(pages).toHaveBeenCalledWith({inspect: '1'});

        });
    });
});