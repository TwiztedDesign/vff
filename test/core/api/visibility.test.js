const visibility = require('../../../src/core/api/visibility');
import {vffData} from '../../../src/core/vffData.js';

let data = {visibility: false};

describe("Visibility", () =>{


    beforeEach(() => {
        vffData.clear();
    })

   describe("Show", () => {
      it("Should show the graphics of the passed template, set visibility to true", () => {
          let template = vffData.registerTemplate('test', data);
          expect(template.visibility).toBeFalsy();
          visibility.show('test');
          expect(template.visibility).toBeTruthy();
      });
   });
   describe("Hide", () => {
        it("Should hide the graphics of the passed template, set visibility to false", () => {
            let template = vffData.registerTemplate('test', data);
            visibility.show('test');
            expect(template.visibility).toBeTruthy();
            visibility.hide('test');
            expect(template.visibility).toBeFalsy();
        });
    });
    describe("Toggle", () => {
        it("Should hide or show the graphics of the passed template based on current visibility state", () => {
            let template = vffData.registerTemplate('test', data);
            visibility.toggle('test');
            expect(template.visibility).toBeTruthy();
            visibility.toggle('test');
            expect(template.visibility).toBeFalsy();
        });
    });

});