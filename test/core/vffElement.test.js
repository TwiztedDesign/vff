import VffElement from '../../src/core/vffElement';

describe('VFF Element', () => {

    describe('New Element', () => {

        it('Should initialize the vff element', () => {

            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'new template');
            headerElement.setAttribute("vff-name", 'title');
            document.body.appendChild(headerElement);

            let vffElementCreated = new VffElement('h1');
            expect(vffElementCreated.element).toEqual(headerElement);
            // let vffElementCreated = new VffElement('<h1>');
            // expect(vffElementCreated.element).toEqual(headerElement);
        });

        it('Should throw error, Invalid Node', () => {
            expect(() =>{new VffElement('<h1');}).toThrow();
        });
    });

});