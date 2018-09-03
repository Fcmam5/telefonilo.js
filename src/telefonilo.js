(function(global) {
  // Helper functions

  /**
   * Check if the client is on a mobile device
   * @returns {Boolean}
   */
  function isMobile() {
    var testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile', 'i');
    return testExp.test(navigator.userAgent);          
  }

  // Call the constructor without `new`
  var Telefonilo = function(querySelector){
    return new Telefonilo.init(querySelector);
  }

  // Not implemented, for the moment
  // Telefonilo.prototype = {
  //   validatePhone: function(){
  //       return -1;
  //   }
  // };

    Telefonilo.init = function(querySelector) {
      var self = this;
      self.querySelector = querySelector || '.phone-num';
      if (isMobile()) {
        var phoneNumberTags = document.querySelectorAll(self.querySelector);
        for (let i = 0; i < phoneNumberTags.length; i++) {
          var el = phoneNumberTags[i]; console.log(el);          
          var aTag = document.createElement('a');
          aTag.href = 'tel://'+el.innerText;
          aTag.innerText = el.innerText;
          el.innerHTML = '';
          el.appendChild(aTag);
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


})(this);