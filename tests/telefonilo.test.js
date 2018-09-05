const Telefonilo = require('../src/telefonilo')();

describe('Test helper functions', () => {
    describe('isMobile()', () => {
        it('should check if the user is on Mobile', () => {
            expect(true).toBeFalsy();
        });
    
        it('should check if the user is NOT on Mobile', () => {
            expect(true).toBeFalsy();
        });
    });

    describe('isValidEncryptionFunction(_function)', () => {
        it('should return false if it`s not a valid function', () => {
            expect(true).toBeFalsy();
        });

        it('should return false if it returns the same parameters', () => {
            expect(true).toBeFalsy();
        });
    });
});

describe('Test Telephonilo', () => {
    it('should be invoked without parameters', () => {
        expect(true).toBeFalsy();
    });

    describe('Accept CSS selectors as parameter', () => {
        it('should work with classed (`.class`) ', () => {
            expect(true).toBeFalsy();
        });

        it('should work with IDs (`#myID`) ', () => {
            expect(true).toBeFalsy();
        });

        // TODO: Correct me
        it('should work with data attributes (`data-attr`) ', () => {
            expect(true).toBeFalsy();
        });

    });
})