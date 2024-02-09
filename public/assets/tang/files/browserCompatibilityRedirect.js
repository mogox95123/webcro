/**
 * This file contains a browser compatibility check which will redirect to the
 * visitor site if the check fails. This redirected url will change based on
 * the current locale. Also, this script is called prior to Angular or any other
 * vendor code is loaded so constants and other services cannot be included.
 *
 * FaceBook UserAgent: Mozilla/5.0 (Linux; Android 7.1.2; Pixel Build/NJH47B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/160.0.0.0.20;]
 * Facebook In-App Browser User Agent: [FB_IAB/FB4A;FBAV/160.0.0.0.20;]
 */

var isBrowserIncompatible = (function () {
  // ensure mobile native webview is always compatible
  if (typeof WL !== 'undefined') {
    return false;
  }

  var version;
  var ua = navigator.userAgent;
  // https://msdn.microsoft.com/en-us/library/cc817582.aspx
  var ieRegex = /MSIE ([0-9]{1,}[\.0-9]{0,})/;
  var safariRegex = /Version\/((\d+\.)+\d+)/;
  var fbInAppBrowserUA = '[FB_IAB/FB4A;FBAV/160.0.0.0.20;]';
  var matches;
  /*
  var supportedMinimums = [{
    name: 'IE',
    version: 10,
  }, {
    name: 'Safari',
    version: 9,
  }];
  */

  // Check for IE
  if (ieRegex.exec(ua) !== null) {
    matches = ieRegex.exec(ua);
    if (matches) {
      version = parseFloat(matches[1]);
      return version < 10;
    }
  }
  // Check for Safari
  if (ua.indexOf('AppleWebKit') >= 0) {
    // INC0127061 - Requirement from marketing. Check for facebook in-app browser user agent.
    // If it is true, than return false so user is not redirected to unsupported browser.
    if (ua.indexOf(fbInAppBrowserUA) >= 0) {
      return false;
    } else {
      matches = safariRegex.exec(ua);
      if (matches) {
        version = parseFloat(matches[1]);
        return version < 9;
      }
    }
  }

  return false;
})();

if (isBrowserIncompatible) {
  (function() {
    var locales = ['en', 'fr'];
    var languageProperties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
    var language;

    var query = location.search.substring(1);
    if (!query) {
      var hash = window.location.hash;
      query = hash.slice(hash.indexOf('?') + 1);
    }

    if (query.length) {
      query = query.toLowerCase();
      var params = query.split('&');

      var p;
      for(p = 0; p < params.length; p++) {
        if (params[p].indexOf('locale') === 0) {
          language = params[p].split('=')[1];
        }
      }
    }

    if (!language) {
      var checkLang;
      var i;
      for(i = 0; i < languageProperties.length; i++) {
        checkLang = navigator[languageProperties[i]];
        if (checkLang && checkLang.length >= 2) {
          language = checkLang;
          break;
        }
      }
    }

    language = language.substr(0, 2);
    // IE8 does not support indexOf for Arrays
    if (language !== locales[0] && language !== locales[1]) {
      language = locales[0]; // use en for default
    }
    window.location.replace('/' + language + '/securecontent/unsupportedbrowser/index.html');
  })();
}
