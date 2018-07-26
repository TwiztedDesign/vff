import VffElement from '../../src/core/vffElement';

describe('VFF Element', () => {
    beforeEach(() =>{
        document.body.innerHTML = '';
    });

    describe('New Element', () => {
        it('Should initialize the vff element', () => {
            let headerElement = document.createElement('h1');
            headerElement.setAttribute("vff-template", 'new template');
            headerElement.setAttribute("vff-name", 'title');
            document.body.appendChild(headerElement);

            let vffElementCreated = new VffElement('h1');
            expect(vffElementCreated.element).toEqual(headerElement);
        });
        it('Should initialize and create the vff element', () => {
            let vffElementCreated = new VffElement('<h2>');
            expect(vffElementCreated.element.constructor.name).toBe('HTMLHeadingElement');
        });

        it('Should throw error, Invalid Node', () => {
            expect(() =>{new VffElement('<h1');}).toThrow();
        });

        it('on change fires on primitive property change' ,(done) => {

            let element = document.createElement('h1');
            element.prop = "title";
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            vffEl.onChange('prop', function(data){
                expect(data).toBe('test');
                done();
            });
            element.prop = 'test';
        })
    });

});