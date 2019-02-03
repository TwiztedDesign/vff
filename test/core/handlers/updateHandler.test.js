import {vffData} from '../../../src/core/vffData.js';
const updateHandler  = require('../../../src/core/handlers/updateHandler.js');
const helpers = require('../../../src/utils/helpers.js');
const interactionEvents = require('../../../src/core/interactionEvents');
const {NAMESPACE_DELIMITER, TIME_CODE: TIMECODE} = require('../../../src/core/consts');

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
        it('Should update the data in a given template as passed in the data obj', () => {
            //Arrange
            let newValue = 'new value';
            let payload = {
                [templateName]:{
                    [controlName]: newValue,
                    [TIMECODE] : Date.now()
                }
            };

            //Act
            updateHandler.update(payload).then(() => {
                //Assert
                expect(control.getValue()).toBe(newValue);
                //Update 3 times for each level, the control, template, and global
                expect(broadcastSpy).toHaveBeenCalledTimes(3);
            });
        });

        it('Should update all the interaction',  () => {
            //Arrange
            const isInteractionEventSpy = jest.spyOn(interactionEvents, 'isInteractionEvent');
            const dispatchEventSpy = jest.spyOn(interactionEvents, 'dispatchEvent');
            isInteractionEventSpy.mockReturnValueOnce(templateName);
            let newValue = 'new value';
            let templateName2 = templateName + '1';
            let payload = {
                [templateName]:{
                    [controlName]: newValue,
                    [TIMECODE] : Date.now()
                },
                [templateName2]:{
                [controlName]: newValue,
                    [TIMECODE] : Date.now()
                }
            };

            //Act
            updateHandler.updateInteraction(payload).then(()=>{
                //Assert
                //Running on the templates
                expect(isInteractionEventSpy).toHaveBeenCalledTimes(2);
                expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
            });
        });
    });
});