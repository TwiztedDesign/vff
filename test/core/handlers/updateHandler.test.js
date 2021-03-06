import {vffData} from '../../../src/core/vffData.js';
const updateHandler  = require('../../../src/core/handlers/updateHandler.js');
const helpers = require('../../../src/utils/helpers.js');
const interactionEvents = require('../../../src/core/interactionEvents');
const {NAMESPACE_DELIMITER, TIMECODE} = require('../../../src/core/consts');
import {VFF_EVENT} from '../../../src/utils/events';
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
                    [TIMECODE] : Date.now()
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
                    [TIMECODE] : Date.now()
                },
                [templateName2]:{
                [controlName]: newValue,
                    [TIMECODE] : Date.now()
                }
            };

            //Act
            updateHandler.updateInteraction(payload);

            //Assert
            //Running on the templates
            expect(isInteractionEventSpy).toHaveBeenCalledTimes(2);
            expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
        });
        it('should send the correct event for control update', async () => {
            //Arrange
            let newValue = 'new value';
            let payload = {
                [templateName]:{
                    [controlName]: newValue,
                    control2 : "some val",
                    control3 : {ui : 'dropdown', value : "option1", options : ['option1', 'option2']},
                    [TIMECODE] : Date.now()
                }
            };
            //Act
            await updateHandler.update(payload);

            //Assert
            expect(control.getValue()).toBe(newValue);
            //Update 3 times for each level, the control, template, and global
            expect(broadcastSpy).toHaveBeenCalledWith(VFF_EVENT + 'test.control', expect.objectContaining({data : newValue}));
            expect(broadcastSpy).toHaveBeenCalledWith(VFF_EVENT + 'test.control2', expect.objectContaining({data : "some val"}));
            expect(broadcastSpy).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({data : {ui : 'dropdown', value : "option1", options : ['option1', 'option2']}}));
        })
    });
});