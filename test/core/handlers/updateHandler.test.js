import {vffData} from '../../../src/core/vffData.js';
const updateHandler  = require('../../../src/core/handlers/updateHandler.js');
const helpers = require('../../../src/utils/helpers.js');
const interactionEvents = require('../../../src/core/interactionEvents');
const {NAMESPACE_DELIMITER, TIME_CODE} = require('../../../src/core/consts');

/******************************* global spies ********************************/

const broadcastSpy = jest.spyOn(helpers, 'broadcast');
const templateName = 'test';
const controlName = `control`;
const controlData = "value";
let control = {};
/****************************************************************************/

describe('Update Handler', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        vffData.clear();
        control = vffData.registerControl(`${templateName}${NAMESPACE_DELIMITER}${controlName}`, controlData);
    });

    describe('Update', () => {
        it('Should update the data in a given template as passed in the data obj', async () => {
            //Arrange
            let newValue = 'new value';
            let payload = {
                [templateName]:{
                    [controlName]: newValue,
                    [TIME_CODE] : Date.now()
                }
            };

            //Act
            await updateHandler.update(payload);

            //Assert
            expect(control.getValue()).toBe(newValue);
            //Update 3 times for each level, the control, template, and global
            expect(broadcastSpy).toHaveBeenCalledTimes(3);
        });

        it('Should update all the interaction', async () => {
            //Arrange
            const isInteractionEventSpy = jest.spyOn(interactionEvents, 'isInteractionEvent');
            const dispatchEventSpy = jest.spyOn(interactionEvents, 'dispatchEvent');
            isInteractionEventSpy.mockReturnValueOnce(templateName);
            let newValue = 'new value';
            let templateName2 = templateName + '1';
            let payload = {
                [templateName]:{
                    [controlName]: newValue,
                    [TIME_CODE] : Date.now()
                },
                [templateName2]:{
                [controlName]: newValue,
                    [TIME_CODE] : Date.now()
                }
            };

            //Act
            updateHandler.updateInteraction(payload);

            //Assert
            //Running on the templates
            expect(isInteractionEventSpy).toHaveBeenCalledTimes(2);
            expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
        });
    });
});