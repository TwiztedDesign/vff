const messenger = require('../../../src/utils/messenger.js');
const events = require('../../../src/core/api/events');
import {vffData} from '../../../src/core/vffData';
import {TRACK_EVENT} from '../../../src/utils/events';

describe("Events Api", () =>{
    beforeEach(()=>{
        vffData.clear();
    });

   describe("Track", () => {
      it("Should post a massage with tracked event with a simple flat object", () => {
          let send = jest.spyOn(messenger, 'send');
          let template = vffData.registerTemplate('test', {visibility : true, title:'title'});
          template.title = 'new title';
          events.track('template title', {title: template.title});
          expect(send).toHaveBeenCalledWith(TRACK_EVENT, {
              "data": {"title": "new title"},
              "name": "template title",
              "overlay_data": {"test":{"title": "new title", "visibility": true}},
              "query": undefined
          });
      });
      it("Should post a massage with tracked event with a complex deep object", () => {
           let send = jest.spyOn(messenger, 'send');
           let template = vffData.registerTemplate('test', {
               visibility : false,
               drivers:{name: 'Joe', stats: {rank: 10, age: 27}}
           });
           template._proxy.drivers.name = 'guy';
           events.track('drivers', {});
           expect(send).toHaveBeenCalledWith(TRACK_EVENT, {
               "data": {},
               "name": "drivers",
               "overlay_data": {"test":{"drivers": {"name": "guy", "stats":{"rank": 10, "age": 27}}, "visibility": false}},
               "query": undefined
           });
       });
       it("Should post a massage with tracked event with a complex deep object with array", () => {
           let send = jest.spyOn(messenger, 'send');
           let template = vffData.registerTemplate('test', {
               visibility : false,
               drivers:[{name: 'Joe', stats: {rank: 10, age: 27}}, {name: 'Ben', stats: {rank: 1, age: 24}}]
           });
           template._proxy.drivers[0].name = "guy";
           events.track('drivers', {visibility_status: template._proxy.visibility});
           expect(send).toHaveBeenCalledWith(TRACK_EVENT, {
               "data": {"visibility_status": false},
               "name": "drivers",
               "overlay_data": {"test": {"drivers": [{"name": "guy", "stats": {"age": 27, "rank": 10}}, {"name": "Ben", "stats": {"age": 24, "rank": 1}}], "visibility": false}},
               "query": undefined
           });
       });
   });
});