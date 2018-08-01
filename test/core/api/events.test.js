const messenger = require('../../../src/utils/messenger.js');
const events = require('../../../src/core/api/events');
import {vffData} from '../../../src/core/vffData';
import {TRACK_EVENT} from '../../../src/utils/events';

describe("Events Api", () =>{
   describe("Track", () => {
      it("Should post a massage with tracked event and the vff data", () => {
          const send = jest.spyOn(messenger, 'send');
          vffData.clear();
          let template = vffData.registerTemplate('test', {visibility : true, title:'title'});
          template.title = 'new title';
          events.track('template title', {title: template.title});
          expect(send).toHaveBeenCalledWith(TRACK_EVENT, {
              "data": {"title": "new title"},
              "name": "template title",
              "overlay_data": [{"template_name": "test", "title": "new title", "visibility": true}],
              "query": undefined
          });
      });
   });
});