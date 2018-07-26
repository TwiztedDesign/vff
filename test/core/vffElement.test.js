import VffElement from '../../src/core/vffElement';
// import {init} from '../../src/core/vffElement';
// jest.mock('../../src/core/vffElement');

describe('VFF Element', () => {
    // beforeEach(() =>{
    //     init.mockClear();
    // });

    describe('New Element', () => {
        it('Should initialize the vff element', () => {
            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'new template');
            headerElement.setAttribute("vff-name", 'title');
            document.body.appendChild(headerElement);

            let vffElementCreated = new VffElement('h1');
            // expect(init).toHaveBeenCalledTimes(1);
            expect(vffElementCreated.element).toEqual(headerElement);
        });
        it('Should initialize and create the vff element', () => {
            let vffElementCreated = new VffElement('<h2>');
            let headerElement = document.createElement('h2');
            expect(vffElementCreated.element).toEqual(headerElement);
        });

        it('Should throw error, Invalid Node', () => {
            expect(() =>{new VffElement('<h1');}).toThrow();
        });
    });

});