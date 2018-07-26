const pagesHandler = require('../../../src/core/handlers/pagesHandler.js');

describe('Query Params Handler', () => {

    describe('Query params', () => {
        it('Should Add the passed pages data object to vff pages', () => {
            let queryParams = jest.spyOn(pagesHandler, 'pages');
            pagesHandler.pages({name: 'some page'});
            expect(queryParams).toHaveBeenCalledWith({name: 'some page'});
        });
    });
});