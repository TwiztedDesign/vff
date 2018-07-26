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

        it('Should fire on change CB on primitive property change' ,(done) => {

            let element = document.createElement('h1');
            element.prop = "title";
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange('prop', function(data){
                expect(data).toBe('test');
                done();
            });
            element.prop = 'test';
            onPropChange();
        });
        it('Should fire on change CB any element property change' ,(done) => {

            let element = document.createElement('h1');
            element.prop = "title";
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange(function(prop, val, path){
                expect(prop).toEqual('prop');
                expect(val).toEqual('test');
                expect(path).toEqual([]);
                done();
            });
            element.prop = 'test';
            onPropChange();
        });
        it('Should fire on change CB on primitive object property change' ,(done) => {

            let element = document.createElement('h1');
            element.pos = {'x': 1};
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange('pos.x', function(data){
                expect(data).toBe(2);
                done();
            });
            element.pos.x = 2;
            onPropChange();
        });

        it('Should fire on change CB on primitive deep objects properties change v1' ,(done) => {

            let element = document.createElement('h1');
            element.pos = {'rot':{'x': 10, 'y': 20, 'z': 0}};
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange('pos.rot.z', function(data){
                expect(data).toBe(10);
                done();
            });
            element.pos.rot.z = 10;
            onPropChange();
        });
        it.skip('Should fire on change CB on primitive deep objects properties change v2' ,(done) => {

            let element = document.createElement('h1');
            element.pos = {'rot':{'x': 10, 'y': 20, 'z': 0}};
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange('pos.rot', function(data){
                expect(data).toBe({x:10, y:20, z:10});
                done();
            });
            element.pos.rot.z = 10;
            onPropChange();
        });
        it.skip('Should fire on change CB on primitive deep objects properties change v3' ,(done) => {

            let element = document.createElement('h1');
            element.pos = {'rot':{'x': 10, 'y': 20, 'z': 0}};
            document.body.appendChild(element);

            let vffEl = new VffElement('h1');
            let onPropChange = vffEl.onChange('pos', function(data){
                expect(data.z).toBe(10);
                done();
            });
            element.pos.rot.z = 10;
            onPropChange();
        });
    });

});