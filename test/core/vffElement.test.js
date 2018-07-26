import VffElement from '../../src/core/vffElement';

describe('VFF Element', () => {
    let vffElementCreated;
    describe('New Element', () => {
        it('Should initialize the vff element', () => {
            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'new template');
            headerElement.setAttribute("vff-name", 'title');
            document.body.appendChild(headerElement);

            vffElementCreated = new VffElement('h1');
            expect(vffElementCreated.element).toEqual(headerElement);
        });
        it('Should initialize and create the vff element', () => {
            let vffElementCreated = new VffElement('<h2>');
            let headerElement = document.createElement('h2');
            expect(vffElementCreated.element).toEqual(headerElement);
        });
        it('Should trigger change', () => {
            vffElementCreated.onChange('title', function(val){
                console.log('Title changed: ', val);
            });
        });

        it('Should throw error, Invalid Node', () => {
            expect(() =>{new VffElement('<h1');}).toThrow();
        });
    });

});