(function (global) {
  // Helper functions

  /**
   * Check if the client is on a mobile device
   * @returns {Boolean}
   */
  function isMobile() {
    var testExp = new RegExp('Android|webOS|iPhone|iPad|' +
      'BlackBerry|Windows Phone|' +
      'Opera Mini|IEMobile|Mobile', 'i');
    return testExp.test(navigator.userAgent);
  }

  /**
   * Verify if the given function is a valid encryption function,
   * @param {function} _function
   * @returns {Boolean}
   */
  function isValidEncryptionFunction(_function) {
    var mockData = '+213123456789';
    return (
      typeof _function === 'function' &&
      typeof _function(mockData) === 'string' &&
      _function(mockData) !== mockData
    );
  }

  // Call the constructor without `new`
  var Telefonilo = function (querySelector, isEncrypted, encrypTionFunction) {
    return new Telefonilo.init(querySelector, isEncrypted, encrypTionFunction);
  }

  // Not implemented, for the moment
  // Telefonilo.prototype = {
  //   validatePhone: function(){
  //       return -1;
  //   }
  // };

  Telefonilo.init = function (querySelector, isEncrypted, encrypTionFunction) {
    var self = this;
    self.querySelector = querySelector || '.phone-num';
    self.isCrypted = isEncrypted && encrypTionFunction;
    var supportsTextContent = typeof document.createElement("span").innerText !== "function";
    
    if (self.isCrypted && !isValidEncryptionFunction(encrypTionFunction)) 
      throw new Error('This encryption function is not valid!');

    if (isMobile()) {
      var phoneNumberTags = document.querySelectorAll(self.querySelector);
      for (var i = 0; i < phoneNumberTags.length; i++) {
        var el = phoneNumberTags[i];
        var aTag = document.createElement('a');
        var elText = supportsTextContent ? el.textContent : el.innerText;
        aTag.href = 'tel://' + (self.isCrypted ? encrypTionFunction(elText) : elText);
        if (supportsTextContent) {
          aTag.textContent = elText;
        } else {
          atag.innerText = elText;
        }
        el.innerHTML = '';
        el.appendChild(aTag);
      }
    } else {
      if (self.isCrypted) {
        var phoneNumberTags = document.querySelectorAll(self.querySelector);
        for (var i = 0; i < phoneNumberTags.length; i++) {
          if (supportsTextContent) {
            phoneNumberTags[i].textContent = encrypTionFunction(phoneNumberTags[i].textContent);
          } else {
            phoneNumberTags[i].innerText = encrypTionFunction(phoneNumberTags[i].innerText);
          }
        }
      }
    }
  };

  Telefonilo.init.prototype = Telefonilo.prototype;

  // Check if it is CommonJS a environments (example: Node)
  if (typeof module === 'object' && module.exports) {
    module.exports = Telefonilo;
  } else {
    // Export as browser globals (global is window)
    global.Telefonilo = Telefonilo;
  }

  /* start-test-block */
  Telefonilo._api = {
    isValidEncryptionFunction: isValidEncryptionFunction,
    isMobile: isMobile,
  }
  /* end-test-block */

})(this);