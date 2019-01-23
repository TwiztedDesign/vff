import '../../src/core/defaultExpose';

describe('Default expose', () => {

    describe('HTML Elements', () => {

        it('Heading element shoud expose inner text and color', () => {
            let element = document.createElement("h1");
            expect(element.expose()).toHaveProperty('text', 'innerText');
            expect(element.expose()).toHaveProperty('color');
        });
        it('span should expose inner text', () => {
            let element = document.createElement("span");
            expect(element.expose()).toHaveProperty('text', 'innerText');
        });
        it('paragraph should expose inner text', () => {
            let element = document.createElement("p");
            expect(element.expose()).toHaveProperty('text', 'innerText');
        });
        it('img should expose inner src', () => {
            let element = document.createElement("img");
            expect(element.expose()).toHaveProperty('src', {path : 'src', attribute : true});
        });

    });

});