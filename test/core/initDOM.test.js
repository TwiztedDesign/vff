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

    });

    it('vff-control - Define 2 controls', () => {

    });

});