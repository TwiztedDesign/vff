import {_init, init} from'../../src/core/initDOM';
import {vffData} from '../../src/core/vffData';
import '../../src/core/defaultExpose';
import {htmlToElement} from '../testHelpers';
import {EXPOSE_DELIMITER,ATTRIBUTE } from  '../../src/core/consts';
import {parseRJSON} from "../../src/utils/helpers";
describe('Init DOM', () => {

    beforeEach(() => {
        document.body.innerHTML = '';
        vffData.clear();
    });

    it('vff-control attribute - The control was created', () => {
        //Arrange
        let controlName = 'ctrl';
        let controlValue = 'Title';
        let element = htmlToElement(`<h1 vff-control="${controlName}"></h1`);
        element.innerText = controlValue;
        document.body.appendChild(element);

        //Act
        _init();

        //Assert
        for(let elementExposedKey in element.expose()){
            //Verify the control has been created
            let controlNameToVerify = `${controlName}${EXPOSE_DELIMITER}${elementExposedKey}`;
            let control = vffData.getControl(controlNameToVerify);
            expect(control).toBeDefined();

            //Verify bindTo path
            expect(control.getOptions().bindTo).toBe(element.expose()[elementExposedKey].path || element.expose()[elementExposedKey]);

            //Verify vff-bind exists on element
            expect(element.getAttribute(ATTRIBUTE.BIND)).toBe(controlName);
        }
    });

    it('vff-control and vff-options - The control was created and the options were set on the control', () => {
        //Arrange
        let controlName = 'ctrl';
        let controlValue = 'Title';
        let controlOptions = `{
            'test1':'1',
            'test2':'2'
        }`;
        let element = htmlToElement(`<h1 vff-control="${controlName}" vff-options="${controlOptions}"></h1`);
        element.innerText = controlValue;
        document.body.appendChild(element);

        //Act
        _init();

        //Assert
        for(let elementExposedKey in element.expose()){
            //Verify the control has been created
            let controlNameToVerify = `${controlName}${EXPOSE_DELIMITER}${elementExposedKey}`;
            let control = vffData.getControl(controlNameToVerify);
            expect(control).toBeDefined();

            //Verify bindTo path
            expect(control.getOptions().bindTo).toBe(element.expose()[elementExposedKey].path || element.expose()[elementExposedKey]);

            //Verify control options exists on the control it self
            let optionsObj = parseRJSON(controlOptions);
            for(let optionKey in optionsObj){
                expect(control.getOptions()[optionKey]).toBe(optionsObj[optionKey]);
            }
        }
    });

    it('vff-control - Define 2 controls', () => {
        let controlName1 = 'ctrl1';
        let controlValue1 = 'Title1';
        let element1 = htmlToElement(`<h1 vff-control="${controlName1}"></h1`);
        element1.innerText = controlValue1;
        document.body.appendChild(element1);

        let controlName2 = 'ctrl2';
        let controlValue2 = 'Title2';
        let element2 = htmlToElement(`<h1 vff-control="${controlName2}"></h1`);
        element2.innerText = controlValue2;
        document.body.appendChild(element2);

        //Act
        _init();

        //Assert
        //Control1
        for(let elementExposedKey in element1.expose()){
            //Verify the control has been created
            let controlNameToVerify = `${controlName1}${EXPOSE_DELIMITER}${elementExposedKey}`;
            let control = vffData.getControl(controlNameToVerify);
            expect(control).toBeDefined();

            //Verify bindTo path
            expect(control.getOptions().bindTo).toBe(element1.expose()[elementExposedKey].path || element1.expose()[elementExposedKey]);

            //Verify vff-bind exists on element
            expect(element1.getAttribute(ATTRIBUTE.BIND)).toBe(controlName1);
        }

        //Control2
        for(let elementExposedKey in element2.expose()){
            //Verify the control has been created
            let controlNameToVerify = `${controlName2}${EXPOSE_DELIMITER}${elementExposedKey}`;
            let control = vffData.getControl(controlNameToVerify);
            expect(control).toBeDefined();

            //Verify bindTo path
            expect(control.getOptions().bindTo).toBe(element2.expose()[elementExposedKey].path || element2.expose()[elementExposedKey]);

            //Verify vff-bind exists on element
            expect(element2.getAttribute(ATTRIBUTE.BIND)).toBe(controlName2);
        }
    });

    it('vff-control attribute on HTMLInputElement - The control was created', () => {
        //Arrange
        let controlName = 'ctrl';
        let controlValue = 'Title';
        let element = htmlToElement(`<input type="text" value="${controlValue}" vff-control="${controlName}"></input`);
        document.body.appendChild(element);
        const addEventListenerSpy = jest.spyOn(element, 'addEventListener');

        //Act
        _init();

        //Assert
        //Verify the control has been created with the same values that were exposed
        let control = vffData.getControl(controlName);
        expect(control).toBeDefined();
        expect(control.getValue()).toBe(controlValue);

        //Verify there is event listener on keyup
        expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', expect.any(Function));

        //Verify vff-bind exists on element
        expect(element.getAttribute(ATTRIBUTE.BIND)).toBe(controlName);
    });

    it('vff-control attribute on HTMLTextAreaElement - The control was created', () => {
        //Arrange
        let controlName = 'ctrl';
        let controlValue = 'Title';
        let element = htmlToElement(`<textarea vff-control="${controlName}">${controlValue}</textarea>`);
        document.body.appendChild(element);
        const addEventListenerSpy = jest.spyOn(element, 'addEventListener');

        //Act
        _init();

        //Assert
        //Verify the control has been created with the same values that were exposed
        let control = vffData.getControl(controlName);
        expect(control).toBeDefined();
        expect(control.getValue()).toBe(controlValue);

        //Verify there is event listener on keyup
        expect(addEventListenerSpy).toHaveBeenCalledWith('keyup', expect.any(Function));

        //Verify vff-bind exists on element
        expect(element.getAttribute(ATTRIBUTE.BIND)).toBe(controlName);
    });
});