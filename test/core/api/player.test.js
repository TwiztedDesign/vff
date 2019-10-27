const playerApi       = require('../../../src/core/api/player');
const messenger = require('../../../src/utils/messenger.js');
import {GO, CROP} from '../../../src/utils/events';

describe("Player Api", () =>{
   describe("Go", () => {
      it("Should post a massage", () => {
          const send = jest.spyOn(messenger, 'send');
          playerApi.go('test', 0);
          expect(send).toHaveBeenCalledTimes(1);
          expect(send).toHaveBeenCalledWith(GO, {target: 'test', time: 0});

      });
   });
   it("Should send crop massage", () => {
       const send = jest.spyOn(messenger, 'send');
       playerApi.crop(0);
       expect(send).toHaveBeenCalledTimes(1);
       expect(send).toHaveBeenCalledWith(CROP,  {"crop": 0});
   });

});