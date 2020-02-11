const playerApi       = require('../../../src/core/api/player');
const messenger = require('../../../src/utils/messenger.js');
import {GO, CROP, AUDIO_TRACK} from '../../../src/utils/events';

describe("Player Api", () =>{
   describe("Go", () => {
      it("Should post a massage", () => {
          const send = jest.spyOn(messenger, 'send');
          playerApi.go('test', 0);
          expect(send).toHaveBeenCalledTimes(1);
          expect(send).toHaveBeenCalledWith(GO, {target: 'test', time: 0});

      });
   });
   describe("CROP", () => {
        it("Should send crop massage", () => {
            const send = jest.spyOn(messenger, 'send');
            playerApi.crop(0);
            expect(send).toHaveBeenCalledTimes(1);
            expect(send).toHaveBeenCalledWith(CROP,  {"crop": 0});
        });

       it("Should send crop massage", () => {
           const send = jest.spyOn(messenger, 'send');
           const top = 0;
           const left = 90;
           const width = 180;
           const height = 180;
           playerApi.crop(top,left,width,height);
           expect(send).toHaveBeenCalledTimes(1);
           expect(send).toHaveBeenCalledWith(CROP,  {top,left,width,height});
       });

        it("Should throw an exception", () => {
            const send = jest.spyOn(messenger, 'send');
            expect(()=>playerApi.crop()).toThrow(Error);
        });
    });
   describe("AUDIO_TRACKS", () => {
        it("Should send audio track massage", () => {
            const send = jest.spyOn(messenger, 'send');
            playerApi.audioTrack(0);
            expect(send).toHaveBeenCalledTimes(1);
            expect(send).toHaveBeenCalledWith(AUDIO_TRACK, 0);
        });
   });
});