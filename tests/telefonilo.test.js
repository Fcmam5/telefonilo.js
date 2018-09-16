const Telefonilo = require('../src/telefonilo');
const { JSDOM } = require('jsdom');
let jsdom = new JSDOM('<!doctype html><html><body></body></html>');
let { window } = jsdom;

// Devices:
const iPad = "Mozilla/5.0 (iPad; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5";
const galaxy = "Mozilla/5.0 (Linux; Android 6.0.1; SM-G900V Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36";
const ffxOnUbuntuDesktop = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0";

// Mock userAgent
function useDevice(dvc) {
  global.navigator.__defineGetter__('userAgent', function () {
    return dvc;
  });
}

const getGlobal = () => global;

describe('Test helper functions', () => {
  describe('isMobile()', () => {
    it('should check if the user is on iPhone', () => {
      useDevice(iPad);
      expect(Telefonilo._api.isMobile()).toBe(true);
    });

    it('should check if the user is on Android', () => {
      useDevice(galaxy);
      expect(Telefonilo._api.isMobile()).toBe(true);
    });

    it('should check if the user is NOT on Mobile', () => {
      useDevice(ffxOnUbuntuDesktop);
      expect(Telefonilo._api.isMobile()).toBe(false);
    });
  });

  describe('isValidEncryptionFunction(_function)', () => {
    it('should return false if it`s not a valid function', () => {
      const isValidEncryptionFunction = Telefonilo._api.isValidEncryptionFunction;
      const goodEncryptionFct = function (x) {
        return x.split ? x.split().map(function (tmp) { return 'not' + tmp }).join() : 'not' + x
      }
      expect(isValidEncryptionFunction()).toBe(false);
      expect(isValidEncryptionFunction('')).toBe(false);
      expect(isValidEncryptionFunction(goodEncryptionFct)).toBe(true);
    });

    it('should return false if it returns the same parameters', () => {
      const isValidEncryptionFunction = Telefonilo._api.isValidEncryptionFunction;
      const wrongEncryptionFct = function (x) { return x; };
      expect(isValidEncryptionFunction(wrongEncryptionFct)).toBe(false);
    });
  });
});

describe('Test Telefonilo', () => {
  it('should be invoked without parameters', () => {
    const telefonilo = Telefonilo();
    expect(telefonilo).toBeDefined();
  });

  it('should throw an error if the encryption function is invalid', () => {
    const wrongEncryptionFct = function (x) { return x; };
    expect(() => { Telefonilo('.phone', true, wrongEncryptionFct) }).toThrowError();
  });

  xit('should attach Telefonilo to the global scope', () => {
    expect(true).toBeFalsy();
  });
});