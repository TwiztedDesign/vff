const helpers = require('../../src/utils/helpers.js');

let obj;

describe('Helpers', () => {
    beforeAll(() => {
        obj = {
            test:{}
        };
    });

    describe('find key', () => {
        it('Should find a key in a given object, case insensitive', () => {
            expect(helpers.findKey(obj, 'Test')).toBe('test');
        });

        it('Should return undefined for a key in a given object if said key does not exists', () => {
            expect(helpers.findKey(obj, 'testKey')).toBe(undefined);
        });

        it('Should return either key in a given object if two keys have the same value variation', () => {
            let obj = {test : {a : {}}, TesT : {b : {}}};
            expect(obj).toHaveProperty('TesT');
            expect(helpers.findKey(obj, 'TesT')).toBe('test');
        });
    });

    describe('Trim', () => {
        it('Should trim the given character from the given string and return the string', () => {
            expect(helpers.trim('**the quick brown fox jumps**', '*')).toBe('the quick brown fox jumps');
            expect(helpers.trim('.the quick brown fox jumps.', '.')).toBe('the quick brown fox jumps');
            expect(helpers.trim('the quick. brown fox jumps', '.')).toBe('the quick. brown fox jumps');
        });

        it('Should not trim the given character if it does not exist in the given string and return the string', () => {
            expect(helpers.trim('**the quick brown fox jumps**', ',')).toBe('**the quick brown fox jumps**');
            expect(helpers.trim('the quick. brown fox jumps', ',')).toBe('the quick. brown fox jumps');
        });

        it('Should trim space if no character argument was passed and return the string', () => {
            expect(helpers.trim(' the quick brown fox jumps ')).toBe('the quick brown fox jumps');
        });
    });

    describe('Get by path', () => {
        beforeEach(() => {
            obj = {
                a:{
                    b:{
                        c: 2
                    }
                }
            };

        });

        it('Should return the data in the given object based on the given path separated by dots', () => {
            expect(helpers.getByPath(obj, 'a.b.c')).toBe(2);
            expect(helpers.getByPath(obj, 'a.b')).toEqual({c: 2});
            expect(helpers.getByPath(obj, 'a')).toEqual({b:{c: 2}});
        });

        it('Should return the data in the given object based on the given partial/missing path separated by dots', () => {
            expect(helpers.getByPath(obj, 'a.b.')).toEqual({c: 2});
            expect(helpers.getByPath(obj, '.a.')).toEqual({b:{c: 2}});
            expect(helpers.getByPath(obj, '.a.b.c.')).toBe(2);
        });

        it('Should return the undefined if incorrect path was given', () => {
            expect(helpers.getByPath(obj, 'c.b.a')).toBe(undefined);
            expect(helpers.getByPath(obj, 'a.c.d')).toBe(undefined);
        });

        it('Should return the undefined if no path was given', () => {
            expect(helpers.getByPath(obj)).toBe(undefined);
        });
    });

    describe('Set by path', () => {
        beforeEach(() => {
            obj = {
                a:{
                    b:{
                        c: 3
                    }
                }
            };

        });

        it('Should set the given value in the given object based on the given path separated by dots', () => {
            helpers.setByPath(obj, 'a.b.c', 2);
            expect(obj.a.b.c).toBe(2);
            helpers.setByPath(obj, 'a.b', 4);
            expect(obj.a.b).toBe(4);
            helpers.setByPath(obj, 'a', 1);
            expect(obj.a).toBe(1);
        });

        it('Should set the given value in the given object based on the given partial/missing path separated by dots', () => {
            helpers.setByPath(obj, 'a.b.c.', 2);
            expect(obj.a.b.c).toBe(2);
            helpers.setByPath(obj, '.a.b.', 4);
            expect(obj.a.b).toBe(4);
            helpers.setByPath(obj, '.a.', 1);
            expect(obj.a).toBe(1);
        });

        it('Should leave the object as is if incorrect path was given', () => {
            let initObj = JSON.parse(JSON.stringify(obj));
            expect(helpers.setByPath(obj, 'a..c.', 3)).toBe(undefined);
            expect(initObj).toEqual(obj);
        });

        it('Should throw an Error "Missing Arguments" if all 3 arguments of the function were not passed', () => {
            expect(helpers.setByPath).toThrow(Error, 'Missing Arguments!');
        });
    });


    describe('Camelize', () => {
        it("should not affect empty strings", () => {
           expect(helpers.camelize('')).toBe('');
        });
        it("should trim spaces", () => {
            expect(helpers.camelize('   a b   c')).toBe('aBC');
        });
        it("should lowercase first char", () => {
            expect(helpers.camelize('Test')).toBe('test');
        });
        it("should uppercase every first letter after space", () => {
            expect(helpers.camelize('ab cd ef')).toBe('abCdEf');
        });
    });
    describe('Decamelize', () => {
        it("should not affect empty strings", () => {
            expect(helpers.camelize('')).toBe('');
        });
        it("should insert a space before evey capital letter ecxept the first one", () => {
            expect(helpers.decamelize('ABC')).toBe('A B C');
        });
    });
    describe('uuid', () => {
        it("should return an alphanumeric string", () => {
            let id = helpers.uuid();
            expect(id.match("[A-Za-z0-9]+")).toBeTruthy();
        });
        it("should a random string", () => {
            let id1 = helpers.uuid();
            let id2 = helpers.uuid();
            expect(id1).not.toBe(id2);
        });
        it("should return string of length 32", () => {
            let id = helpers.uuid();
            expect(id.length).toBe(32);
        });
    });
    describe('extend', () => {
        it('extend lhs object with rhs object', () => {
            var lhs = {a : 1};
            var rhs = {b : 2};
            helpers.extend(lhs, rhs);
            expect(lhs.a).toBe(1);
            expect(lhs.b).toBe(2);
        });
        it('return the extended object', () => {
            var lhs = {a : 1};
            var rhs = {b : 2};
            var result = helpers.extend(lhs, rhs);
            expect(result).toBe(lhs);
        });
        it('override existing properties', () => {
            var lhs = {a : 1};
            var rhs = {a : 2};
            helpers.extend(lhs, rhs);
            expect(lhs.a).toBe(2);
        });
    });
    describe('mode check', () => {
        it('should return "normal" as default value', () => {
            expect(helpers.mode).toBe('normal');
        });
    });
    describe('docRef', () => {
        it('should return a link with an appropriate anchor', () => {
           expect(helpers.docRef('anchor')).toBe('https://www.videoflow.io/documentation/api/vff?id=anchor');
        });
    });
    describe('deepCompare', () => {
        it('should work', () => {
            expect(helpers.deepCompare({},{})).toBeTruthy();
            expect(helpers.deepCompare({a:1}, {a:1})).toBeTruthy();
            expect(helpers.deepCompare({a:1}, new Proxy({a:1},{}))).toBeTruthy();
            expect(helpers.deepCompare({a:{b:{c:1}}},{a:{b:{c:1}}})).toBeTruthy();
            expect(helpers.deepCompare({a:1},{a:2})).toBeFalsy();
            expect(helpers.deepCompare({a:1},{b:1})).toBeFalsy();
            expect(helpers.deepCompare({a:1},{a:1, b:1})).toBeFalsy();
            expect(helpers.deepCompare({a:1},{a:"1"})).toBeFalsy();
        });
    });
    describe('noop', () => {
        it('should noop', () => {
            expect(helpers.noop()).toBeUndefined();
        })
    });


});
